var svgContainer = document.getElementById("svg-frame");

var shapeToggle = document.getElementById("shape-toggle");
var clearButton = document.getElementById("clear-button");

var shapeDisplay = document.getElementById("shape-display");

// Functions to change the shape between a circle, triangle and a square

var currentShape = "circle";

// Changes the shape
var toggleShape = function() {
    switch(currentShape) {
        case "circle":
            currentShape = "triangle";
            break;
        case "triangle":
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

// Function to clear the SVG container
var clearSVGContainer = function() {
    svgContainer.innerHTML = "";
};

// Functions to draw shapes

// Draws the shape and connects the line
var drawSVG = function() {
    switch(currentShape) {
        case "circle":
            drawCircle();
            break;
        case "triangle":
            drawTriangle();
            break;
        case "square":
            drawSquare();
            break;
    }
    drawLine();
};

/* 
    Instructions to draw a line
    Draws a line from (x0, y0) -> (x1, y1)
*/
var drawLine = function(x0, y0, x1, y1) {

};

/* 
    Instructions to draw a circle
    Draws a circle centered at (x, y)
    The circle has radius r
*/
var drawCircle = function(x, y, r) {

};

/*
    Instructions to draw a triangle
    Draws a triangle centered at (x, y)
    Each side of the triangle has length s
*/
var drawTriangle = function(x, y, s) {

};

/*
    Instructions to draw a square
    Draws a square centered at (x, y)
    Each side of the square has length s
*/
var drawSquare = function(x, y, s) {

};

// Runs drawSVG() when any part of the SVG container is clicked on
svgContainer.addEventListener('click', drawSVG, true);