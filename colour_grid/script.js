// Get the container element
const container = document.getElementById('container');
const resetBtn = document.getElementById('reset-btn');
const CONTAINER_SIZE = 960; // Container width and height in pixels

// Function to create a grid with specified number of squares per side
function createGrid(squaresPerSide) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate square size
    const squareSize = CONTAINER_SIZE / squaresPerSide;

    // Create grid squares
    const totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Initialize interaction count and base color
        let interactionCount = 0;
        let baseColor = null;

        // Add hover effect with random RGB and progressive darkening
        square.addEventListener('mouseenter', function() {
            interactionCount++;

            // On first interaction, set random pink shade
            if (interactionCount === 1) {
                // Shades of pink
                const pinkShades = [
                    { r: 255, g: 192, b: 203 },  // light pink
                    { r: 255, g: 182, b: 193 },  // light pink (deeper)
                    { r: 255, g: 105, b: 180 },  // hot pink
                    { r: 255, g: 20, b: 147 },   // deep pink
                    { r: 219, g: 112, b: 147 },  // pale violet red
                    { r: 255, g: 0, b: 255 },    // magenta
                    { r: 255, g: 160, b: 122 },  // light salmon
                    { r: 255, g: 105, b: 180 },  // hot pink
                    { r: 238, g: 130, b: 238 },  // violet
                    { r: 255, g: 228, b: 225 }   // misty rose
                ];
                baseColor = pinkShades[Math.floor(Math.random() * pinkShades.length)];
            }

            // Calculate darkening factor (10% darker each time)
            // After 10 interactions, should be fully black
            const darkenFactor = Math.max(0, 1 - (interactionCount * 0.1));

            const r = Math.floor(baseColor.r * darkenFactor);
            const g = Math.floor(baseColor.g * darkenFactor);
            const b = Math.floor(baseColor.b * darkenFactor);

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);
    }
}

// Create initial 16x16 grid
createGrid(16);

// Add event listener to reset button
resetBtn.addEventListener('click', function() {
    console.log('Button clicked!'); // Debug log
    let userInput = prompt('Enter number of squares per side (max 100):');

    // Convert to number
    let squaresPerSide = parseInt(userInput);

    // Validate input
    if (isNaN(squaresPerSide) || squaresPerSide < 1) {
        alert('Please enter a valid number greater than 0');
        return;
    }

    if (squaresPerSide > 100) {
        alert('Maximum size is 100x100. Setting to 100.');
        squaresPerSide = 100;
    }

    // Create new grid
    createGrid(squaresPerSide);
});
