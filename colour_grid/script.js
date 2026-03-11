const container = document.getElementById('grid-container');
const resetBtn = document.getElementById('reset-btn');
const gridSizeInput = document.getElementById('grid-size');
function createGrid(squaresPerSide) {
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    const totalSquares = squaresPerSide * squaresPerSide;
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');

        let interactionCount = 0;
        let baseColor = null;

        square.addEventListener('mouseenter', function() {
            interactionCount++;

            if (interactionCount === 1) {
                const neonColors = [
                    { r: 233, g: 69, b: 96 },   // neon red
                    { r: 196, g: 77, b: 255 },   // electric purple
                    { r: 74, g: 222, b: 128 },    // terminal green
                    { r: 255, g: 217, b: 61 },    // arcade yellow
                    { r: 0, g: 212, b: 255 },     // cyan
                    { r: 255, g: 107, b: 157 },   // hot pink
                    { r: 255, g: 140, b: 66 },    // neon orange
                ];
                baseColor = neonColors[Math.floor(Math.random() * neonColors.length)];
            }

            const darkenFactor = Math.max(0, 1 - (interactionCount * 0.1));

            const r = Math.floor(baseColor.r * darkenFactor);
            const g = Math.floor(baseColor.g * darkenFactor);
            const b = Math.floor(baseColor.b * darkenFactor);

            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            square.style.boxShadow = `inset 0 0 ${4 * darkenFactor}px rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${darkenFactor * 0.6})`;
        });

        container.appendChild(square);
    }
}

createGrid(16);

resetBtn.addEventListener('click', function() {
    let squaresPerSide = parseInt(gridSizeInput.value);

    if (isNaN(squaresPerSide) || squaresPerSide < 1) {
        squaresPerSide = 16;
        gridSizeInput.value = 16;
    }

    if (squaresPerSide > 100) {
        squaresPerSide = 100;
        gridSizeInput.value = 100;
    }

    createGrid(squaresPerSide);
});
