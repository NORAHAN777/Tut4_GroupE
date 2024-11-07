// Main draw function to create sky background with gradient effect and texture
function drawSkyBackground() {
    let svg = document.getElementById("svg");

    // Clear previous content
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    // Define parameters for the sky gradient
    const rectHeight = 20; // Height of each rectangle in the gradient
    const rectWidth = 800; // Full width of the SVG canvas
    const numberOfRectangles = Math.ceil(600 / rectHeight); // Number of rectangles to cover the SVG height

    // Define softened color stops for a more harmonious gradient
    const colors = [
        { r: 160, g: 200, b: 220 },  // Light Blue
        { r: 180, g: 220, b: 170 },  // Soft Green
        { r: 245, g: 225, b: 150 },  // Soft Yellow
        { r: 250, g: 180, b: 120 },  // Soft Orange
        { r: 240, g: 140, b: 130 }   // Soft Red
    ];

    // Calculate the number of rectangles per color section
    const sectionRectCount = Math.ceil(numberOfRectangles / colors.length);

    // Create rectangles from top to bottom with gradient effect
    for (let i = 0; i < numberOfRectangles; i++) {
        // Determine which color section we're in
        const sectionIndex = Math.floor(i / sectionRectCount);
        const nextSectionIndex = Math.min(sectionIndex + 1, colors.length - 1);

        // Calculate the ratio within the current section
        const sectionRatio = (i % sectionRectCount) / sectionRectCount;

        // Interpolate between the current section color and the next
        const r = Math.round(colors[sectionIndex].r * (1 - sectionRatio) + colors[nextSectionIndex].r * sectionRatio);
        const g = Math.round(colors[sectionIndex].g * (1 - sectionRatio) + colors[nextSectionIndex].g * sectionRatio);
        const b = Math.round(colors[sectionIndex].b * (1 - sectionRatio) + colors[nextSectionIndex].b * sectionRatio);

        // Create the rectangle with the calculated color and position
        let rect = createRect(0, i * rectHeight, rectWidth, rectHeight, r, g, b);
        svg.appendChild(rect);

        // Add oil painting texture effect by overlaying smaller rectangles with slight color variations
        addTexture(rect, r, g, b, rectWidth, rectHeight, 0.1);
    }
}

// Function to add a texture effect by overlaying small rectangles with slight color variations
function addTexture(baseRect, r, g, b, rectWidth, rectHeight, opacity) {
    let svg = document.getElementById("svg");

    // Overlay 5 small rectangles with random offsets and slight color variations
    for (let j = 0; j < 5; j++) {
        const offsetX = Math.random() * 10 - 5; // Random offset for x-axis
        const offsetY = Math.random() * 10 - 5; // Random offset for y-axis

        const colorVariation = (Math.random() - 0.5) * 20; // Small random color variation
        const textureColor = `rgba(${Math.min(255, Math.max(0, r + colorVariation))}, 
                                    ${Math.min(255, Math.max(0, g + colorVariation))}, 
                                    ${Math.min(255, Math.max(0, b + colorVariation))}, ${opacity})`;

        // Create a small rectangle for texture
        let textureRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        textureRect.setAttribute("x", parseFloat(baseRect.getAttribute("x")) + offsetX);
        textureRect.setAttribute("y", parseFloat(baseRect.getAttribute("y")) + offsetY);
        textureRect.setAttribute("width", rectWidth * 0.9);
        textureRect.setAttribute("height", rectHeight * 0.9);
        textureRect.setAttribute("fill", textureColor);

        svg.appendChild(textureRect);
    }
}

// Execute the main draw function on page load
drawSkyBackground();

//Qingyang Wang
// Main draw function to create sky background with gradient effect and texture
function drawSkyBackground() {
    let svg = document.getElementById("svg");

    // Clear previous content
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }

    // Define parameters for the sky gradient
    const rectHeight = 20;
    const rectWidth = 850;
    const numberOfRectangles = Math.ceil(600 / rectHeight);

    // Define softened color stops for a harmonious gradient
    const colors = [
        { r: 160, g: 200, b: 220 },
        { r: 180, g: 220, b: 170 },
        { r: 245, g: 225, b: 150 },
        { r: 250, g: 180, b: 120 },
        { r: 240, g: 140, b: 130 }
    ];

    // Calculate the number of rectangles per color section
    const sectionRectCount = Math.ceil(numberOfRectangles / colors.length);

    // Create rectangles with gradient effect
    for (let i = 0; i < numberOfRectangles; i++) {
        const sectionIndex = Math.floor(i / sectionRectCount);
        const nextSectionIndex = Math.min(sectionIndex + 1, colors.length - 1);
        const sectionRatio = (i % sectionRectCount) / sectionRectCount;

        const r = Math.round(colors[sectionIndex].r * (1 - sectionRatio) + colors[nextSectionIndex].r * sectionRatio);
        const g = Math.round(colors[sectionIndex].g * (1 - sectionRatio) + colors[nextSectionIndex].g * sectionRatio);
        const b = Math.round(colors[sectionIndex].b * (1 - sectionRatio) + colors[nextSectionIndex].b * sectionRatio);

        let rect = createRect(0, i * rectHeight, rectWidth, rectHeight, r, g, b);
        svg.appendChild(rect);

        addTexture(rect, r, g, b, rectWidth, rectHeight, 0.1);
    }
}

// Function to add a texture effect
function addTexture(baseRect, r, g, b, rectWidth, rectHeight, opacity) {
    let svg = document.getElementById("svg");

    for (let j = 0; j < 5; j++) {
        const offsetX = Math.random() * 10 - 5;
        const offsetY = Math.random() * 10 - 5;
        const colorVariation = (Math.random() - 0.5) * 20;
        const textureColor = `rgba(${Math.min(255, Math.max(0, r + colorVariation))}, 
                                    ${Math.min(255, Math.max(0, g + colorVariation))}, 
                                    ${Math.min(255, Math.max(0, b + colorVariation))}, ${opacity})`;

        let textureRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        textureRect.setAttribute("x", parseFloat(baseRect.getAttribute("x")) + offsetX);
        textureRect.setAttribute("y", parseFloat(baseRect.getAttribute("y")) + offsetY);
        textureRect.setAttribute("width", rectWidth * 0.9);
        textureRect.setAttribute("height", rectHeight * 0.9);
        textureRect.setAttribute("fill", textureColor);

        svg.appendChild(textureRect);
    }
}

// Function to draw the building structure
function drawBuilding() {
    const svg = document.getElementById("svg");

    // Building outline
    const building = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    building.setAttribute("points", "0,300 50,240 100,240 100,150 110,150 120,40 130,150 140,150 140,200 170,200 200,200 260,210 300,220 330,250 330,270 450,270 480,300");
    building.setAttribute("fill", "rgba(44, 27, 50, 0.8)");
    svg.appendChild(building);

    // Reflection of building
    const reflection = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    reflection.setAttribute("x", "100");
    reflection.setAttribute("y", "300");
    reflection.setAttribute("width", "50");
    reflection.setAttribute("height", "280");
    reflection.setAttribute("fill", "rgba(44, 27, 50, 0.8)");
    svg.appendChild(reflection);
}

// Execute the main draw functions on page load
window.onload = function() {
    drawSkyBackground();
    drawBuilding();
};
