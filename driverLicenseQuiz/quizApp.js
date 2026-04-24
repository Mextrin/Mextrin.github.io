const quizLabel = document.getElementById("quiz-label");
const quizImage = document.getElementById("quiz-image");
const quizOptions = document.getElementById("quiz-options");
const confirmButton = document.getElementById("confirm-button");
const recentSignNames = [];
const recentSignLimit = 10;
let hasConfirmed = false;

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandomSubset(items, count) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        const currentItem = shuffledItems[index];

        shuffledItems[index] = shuffledItems[randomIndex];
        shuffledItems[randomIndex] = currentItem;
    }

    return shuffledItems.slice(0, count);
}

function getRandomSign(eligibleSigns) {
    const availableSigns = eligibleSigns.filter((sign) => !recentSignNames.includes(sign.name));
    const signPool = availableSigns.length > 0 ? availableSigns : eligibleSigns;
    const selectedSign = getRandomItem(signPool);

    recentSignNames.push(selectedSign.name);

    if (recentSignNames.length > recentSignLimit) {
        recentSignNames.shift();
    }

    return selectedSign;
}

function getStatementMatchesSign(statement, sign) {
    return getStatementSignNames(statement.trueFor).includes(sign.name);
}

function getStatementIsFalseForSign(statement, sign) {
    const falseFor = getStatementSignNames(statement.falseFor).includes(sign.name);
    const similarFalseFor = getStatementSignNames(statement.similarFalseFor).includes(sign.name);

    return falseFor || similarFalseFor;
}

function getStatementIsSimilarFalseForSign(statement, sign) {
    return getStatementSignNames(statement.similarFalseFor).includes(sign.name);
}

function getExplicitFalseStatementsForSign(sign, excludedStatement) {
    const excludedStatements = Array.isArray(excludedStatement) ? excludedStatement : [excludedStatement];

    return statements.filter(
        (statement) =>
            !excludedStatements.includes(statement) &&
            getStatementIsFalseForSign(statement, sign) &&
            !getStatementMatchesSign(statement, sign)
    );
}

function getExplicitFalseStatementsByPreference(sign, excludedStatements) {
    const similarFalseStatements = statements.filter(
        (statement) =>
            !excludedStatements.includes(statement) &&
            getStatementIsSimilarFalseForSign(statement, sign) &&
            !getStatementMatchesSign(statement, sign)
    );
    const regularFalseStatements = statements.filter(
        (statement) =>
            !excludedStatements.includes(statement) &&
            getStatementIsFalseForSign(statement, sign) &&
            !getStatementIsSimilarFalseForSign(statement, sign) &&
            !getStatementMatchesSign(statement, sign)
    );

    return [
        ...getRandomSubset(similarFalseStatements, similarFalseStatements.length),
        ...getRandomSubset(regularFalseStatements, regularFalseStatements.length)
    ];
}

function getEligibleSignsForCorrectCount(correctCount) {
    const falseCount = 4 - correctCount;

    return signs.filter((sign) => {
        const trueStatements = statements.filter((statement) => getStatementMatchesSign(statement, sign));

        if (trueStatements.length < correctCount) {
            return false;
        }

        const selectedTrueStatements = getRandomSubset(trueStatements, correctCount);

        return getExplicitFalseStatementsForSign(sign, selectedTrueStatements).length >= falseCount;
    });
}

function getRandomCorrectCount() {
    const preferredCorrectCount = Math.floor(Math.random() * 5);
    const correctCounts = [preferredCorrectCount, 0, 1, 2, 3, 4].filter(
        (count, index, counts) => counts.indexOf(count) === index
    );

    return correctCounts.find((correctCount) => getEligibleSignsForCorrectCount(correctCount).length > 0);
}

function getStatementExplanationForSign(statement, sign) {
    const allMatches = [
        ...(Array.isArray(statement.trueFor) ? statement.trueFor : []),
        ...(Array.isArray(statement.falseFor) ? statement.falseFor : []),
        ...(Array.isArray(statement.similarFalseFor) ? statement.similarFalseFor : [])
    ];
    const match = allMatches.find((currentMatch) => {
        const signName = typeof currentMatch === "string" ? currentMatch : currentMatch.signName;

        return signName === sign.name;
    });

    if (match && typeof match === "object" && match.explanation) {
        return match.explanation;
    }

    if (getStatementMatchesSign(statement, sign)) {
        return "This statement is true for this sign.";
    }

    return "This statement does not match the meaning of this sign.";
}

function getStatementSignNames(matches) {
    if (!Array.isArray(matches)) {
        return [];
    }

    return matches
        .map((match) => (typeof match === "string" ? match : match.signName))
        .filter(Boolean);
}

function renderQuiz() {
    if (
        typeof signs === "undefined" ||
        typeof statements === "undefined" ||
        signs.length === 0 ||
        statements.length === 0
    ) {
        return;
    }

    const correctCount = getRandomCorrectCount();
    const eligibleSigns = typeof correctCount === "number" ? getEligibleSignsForCorrectCount(correctCount) : [];

    if (eligibleSigns.length === 0) {
        return;
    }

    const activeSign = getRandomSign(eligibleSigns);
    const trueStatements = statements.filter((statement) => getStatementMatchesSign(statement, activeSign));
    const selectedTrueStatements = getRandomSubset(trueStatements, correctCount);
    const selectedFalseStatements = getExplicitFalseStatementsByPreference(activeSign, selectedTrueStatements).slice(
        0,
        4 - correctCount
    );
    const selectedStatements = [...selectedTrueStatements, ...selectedFalseStatements];
    const randomizedStatements = getRandomSubset(selectedStatements, selectedStatements.length);

    hasConfirmed = false;
    quizLabel.textContent = "Which statements are true for this sign?";
    confirmButton.textContent = "Confirm";
    quizOptions.innerHTML = "";

    quizImage.src = activeSign.imageUrl;
    quizImage.alt = "Road sign";

    randomizedStatements.forEach((statement, index) => {
        const label = document.createElement("label");
        label.className = "option";
        label.dataset.isTrue = String(getStatementMatchesSign(statement, activeSign));
        label.dataset.explanation = getStatementExplanationForSign(statement, activeSign);

        const input = document.createElement("input");
        input.type = "checkbox";
        input.name = "answer";
        input.value = String(index);

        const content = document.createElement("span");
        content.className = "option-content";

        const text = document.createElement("span");
        text.className = "option-text";
        text.textContent = statement.statement;

        label.appendChild(input);
        content.appendChild(text);
        label.appendChild(content);
        quizOptions.appendChild(label);
    });
}

renderQuiz();

confirmButton.addEventListener("click", () => {
    if (!hasConfirmed) {
        const optionElements = quizOptions.querySelectorAll(".option");

        optionElements.forEach((optionElement) => {
            const input = optionElement.querySelector("input");
            const isTrue = optionElement.dataset.isTrue === "true";
            const isChecked = input.checked;

            if (isTrue) {
                optionElement.classList.add("correct");

                if (!isChecked) {
                    const content = optionElement.querySelector(".option-content");
                    const explanation = document.createElement("span");
                    explanation.className = "option-explanation";
                    explanation.textContent = optionElement.dataset.explanation;
                    content.appendChild(explanation);
                }
            } else if (isChecked) {
                optionElement.classList.add("incorrect");

                const content = optionElement.querySelector(".option-content");
                const explanation = document.createElement("span");
                explanation.className = "option-explanation";
                explanation.textContent = optionElement.dataset.explanation;
                content.appendChild(explanation);
            }

            input.disabled = true;
        });

        hasConfirmed = true;
        confirmButton.textContent = "Next";
        return;
    }

    renderQuiz();
});
