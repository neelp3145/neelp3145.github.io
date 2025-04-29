let x = 100;
let y = 100;

function setup() {
    const canvas = createCanvas(600, 400);
    background(200);

    // Attach clear button functionality
    const clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', () => {
        background(200); // Reset background to gray
    });
}

function draw() {
    if (mouseIsPressed) {
        stroke(0);
        strokeWeight(2);
        line(x, y, mouseX, mouseY);
    }
    x = mouseX;
    y = mouseY;
}

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('drawingArea'); // Attach canvas to the div
    background(200);

    const clearButton = document.getElementById('clearBtn');
    clearButton.addEventListener('click', () => {
        background(200);
    });
}
