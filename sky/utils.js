// A function to create a colour string from 3 inputs (RGB format)
function makeSimpleRGB(inputRed, inputGreen, inputBlue) {
    return `rgb(${inputRed}, ${inputGreen}, ${inputBlue})`;
}

// A function to create a random rounded value
function randomRoundedValue(maxValue) {
    return Math.round(Math.random() * maxValue);
}

// A function to create a random colour
function makeRGB(redInputValue, greenInputValue, blueInputValue) {
    // Check if values are provided, otherwise assign random values
    let redOutputValue = redInputValue ?? randomRoundedValue(255);
    let greenOutputValue = greenInputValue ?? randomRoundedValue(255);
    let blueOutputValue = blueInputValue ?? randomRoundedValue(255);

    return `rgb(${redOutputValue}, ${greenOutputValue}, ${blueOutputValue})`;
}

// A function to create a rectangle with default values and specific color
function createRect(inputXPos, inputYPos, inputWidth, inputHeight, inputR, inputG, inputB, maxWidth = 600, maxHeight = 800) {
    let outputXPos = inputXPos ?? randomRoundedValue(maxWidth);
    let outputYPos = inputYPos ?? randomRoundedValue(maxHeight);
    let outputWidth = inputWidth ?? randomRoundedValue(maxWidth);
    let outputHeight = inputHeight ?? randomRoundedValue(maxHeight);
    let outputColour = makeSimpleRGB(inputR, inputG, inputB);

    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    newRectangle.setAttribute("x", outputXPos);
    newRectangle.setAttribute("y", outputYPos);
    newRectangle.setAttribute("width", outputWidth);
    newRectangle.setAttribute("height", outputHeight);
    newRectangle.setAttribute("fill", outputColour);
    
    return newRectangle;
}

// New function to interpolate between two colors based on a ratio (for gradients)
function interpolateColor(startColor, endColor, ratio) {
    // Linearly interpolate each color component based on the ratio
    const r = Math.round(startColor.r * (1 - ratio) + endColor.r * ratio);
    const g = Math.round(startColor.g * (1 - ratio) + endColor.g * ratio);
    const b = Math.round(startColor.b * (1 - ratio) + endColor.b * ratio);
    
    return makeSimpleRGB(r, g, b);
}
