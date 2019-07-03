var rawFile = new XMLHttpRequest();
rawFile.open("GET", 'ProjectList.txt');
rawFile.onreadystatechange = function() {

    console.log("functionenter");
    if (rawFile.readyState === 4 && (rawFile.state === 200 || rawFile.readyState == 0))
    {   
        var text = rawFile.responseText;
        var splitText = text.split('\n');
        console.log(splitText);
    }
};