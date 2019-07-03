var rawFile = new XMLHttpRequest();
rawFile.open("GET", 'ProjectList.txt');
var text = rawFile.responseText;
var splitText = text.split('\n');
console.log(splitText);