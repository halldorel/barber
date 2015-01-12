var w = window.innerWidth;
var h = window.innerHeight;

var hexWidth = 50;
var hexHeight = 43;

var padding = 7;

var hexWidthHalf = (hexWidth + padding) / 2;

var rows = Math.floor(h / hexHeight * 0.20);

console.log(w, h);

var hexInRow = Math.ceil(w / (hexWidth + padding));

var hexElement = $("#hexagons g#hexgroup g.hexagon");
hexElement.remove();

var hexGroupElement = $("#hexagons g#hexgroup");

for (var i = 0; i < rows; i++)
{
    for (var j = 0; j < hexInRow; j++)
    {
        placeHexagonAt(i, j);
    }
}
/*
var extraPaddingOne = 0.12;
var extraPaddingTwo = 0.08

for(var i = rows; i < rows + 2; i++)
{
    for(var j = 0; j < hexInRow; j++)
    {
        if(j < Math.floor(extraPaddingOne * cw) || j > hexInRow)
        {
            placeHexagonAt(i, j);
        }
    }
}*/

function placeHexagonAt(i, j, offsetX)
{
    var offsetX = offsetX || 0;
    if (i % 2 == 1)
    {
        offsetX = hexWidthHalf;
    }
    var newHexagon = hexElement.clone();
    var xPos = j * (hexWidth + padding) + offsetX;
    var yPos = i * (hexHeight + padding);
    var transformAttr = 'translate(' + xPos + ', ' + yPos + ') scale(0.1)';

    newHexagon.attr({
        transform: transformAttr
    });
    
    hexGroupElement.append(newHexagon);
}

var colorizeRandomHexagons = function () {
    $("#hexgroup .hexagon polygon").each(function (id, el) {
        if (Math.random() < 0.2) {
            $(el).attr("class", "red");
        } else {
            $(el).attr("class", "black");
        }
    });
    //console.log($("#hexgroup .hexagon"));
};

colorizeRandomHexagons();
setInterval(colorizeRandomHexagons, 5000);
