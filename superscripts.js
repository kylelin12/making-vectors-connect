var svgContainer = document.getElementById("svg-frame");

var shapeToggle = document.getElementById("shape-toggle");
var clearButton = document.getElementById("clear-button");

var shapeDisplay = document.getElementById("shape-display");

// Functions to change the shape between a circle and a square

var currentShape = "circle";

// Changes the shape
var toggleShape = function() {
    switch(currentShape) {
        case "circle":
            currentShape = "square";
            break;
        case "square":
            currentShape = "circle";
            break;
    }
    updateShape();
    console.log("Current shape is a " + currentShape);
};

// Updates the text displaying what it is
var updateShape = function() {
    var shapeString = "Current shape: " + currentShape;
    shapeDisplay.innerHTML = shapeString;
};

// Runs toggleShape() on button click
shapeToggle.addEventListener('click', toggleShape, true);

// Functions to draw shapes

var curX;
var curY;

var freshStart = true;

var svgns = "http://www.w3.org/2000/svg";

// Draws the shape and connects the line
var drawSVG = function(e) {

    var svgX = e.offsetX;
    var svgY = e.offsetY;

    if (!freshStart) {
        drawLine(curX, curY, svgX, svgY);
    } else {
        freshStart = false;
    }

    switch(currentShape) {
        case "circle":
            drawCircle(svgX, svgY, 5);
            break;
        case "square":
            drawSquare(svgX, svgY, 10);
            break;
    }

    updateCoor(svgX, svgY);
};

/* 
    Instructions to draw a line
    Draws a line from (x0, y0) -> (x1, y1)
*/
var drawLine = function(x0, y0, x1, y1) {
    console.log("x1: " + x0 + " y1: " + y0 + " x2: " + x1 + " y2: " + y1);
    var drawnLine = document.createElementNS(svgns, 'line');
    drawnLine.setAttributeNS(null, 'x1', x0);
    drawnLine.setAttributeNS(null, 'y1', y0);
    drawnLine.setAttributeNS(null, 'x2', x1);
    drawnLine.setAttributeNS(null, 'y2', y1);
    drawnLine.classList.add('d-line');
    svgContainer.appendChild(drawnLine);
};

// Function to update the curX and curY variables
var updateCoor = function(x, y) {
    curX = x;
    curY = y;
}

/* 
    Instructions to draw a circle
    Draws a circle centered at (x, y)
    The circle has radius r
*/
var drawCircle = function(x, y, r) {
    var drawnCircle = document.createElementNS(svgns, 'circle');
    drawnCircle.setAttributeNS(null, 'cx', x);
    drawnCircle.setAttributeNS(null, 'cy', y);
    drawnCircle.setAttributeNS(null, 'r', r);
    drawnCircle.classList.add('d-circle');
    svgContainer.appendChild(drawnCircle);
};

/*
    Instructions to draw a square
    Draws a square centered at (x, y)
    Each side of the square has length s
*/
var drawSquare = function(x, y, s) {
    var drawnSquare = document.createElementNS(svgns, 'rect');
    drawnSquare.setAttributeNS(null, 'x', x - (s / 2));
    drawnSquare.setAttributeNS(null, 'y', y - (s / 2));
    drawnSquare.setAttributeNS(null, 'width', s);
    drawnSquare.setAttributeNS(null, 'height', s);
    drawnSquare.classList.add('d-square');
    svgContainer.appendChild(drawnSquare);
};

// Function to clear the SVG container
var clearSVGContainer = function() {
    svgContainer.innerHTML = "";
    freshStart = true;
};

// Runs clearSVGContainer() when the clear button is clicked
clearButton.addEventListener('click', clearSVGContainer, true);

// Runs drawSVG() when any part of the SVG container is clicked on
svgContainer.addEventListener('click', drawSVG, true);