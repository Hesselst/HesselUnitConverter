var tempButton = document.getElementById("temperatureConvButton");
var lengthButton = document.getElementById("lengthConvButton");

var tempBox = document.getElementById("temperatureConv");
var lengthBox = document.getElementById("lengthConv");

tempButton.onclick = function()
{
    hideBoxes();
    tempBox.style.visibility = "visible";
}

lengthButton.onclick = function()
{
    hideBoxes();
    lengthBox.style.visibility = "visible";
}

function hideBoxes()
{
    tempBox.style.visibility = "hidden";
    lengthBox.style.visibility = "hidden";
}