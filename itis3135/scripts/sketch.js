let x = 100;
let y = 100;
let drawing = [];
let undone = [];

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('drawingArea');
    background(200);

    // Event listeners
    document.getElementById('clearBtn').addEventListener('click', clearCanvas);
    document.getElementById('undoBtn').addEventListener('click', undoLast);
    document.getElementById('redoBtn').addEventListener('click', redoLast);
}

function draw() {
    if (mouseIsPressed) {
        const newLine = { x1: x, y1: y, x2: mouseX, y2: mouseY };
        drawing.push(newLine);
        undone = []; // Clear redo stack on new draw
    }

    background(200);

    // Redraw all saved lines
    for (let line of drawing) {
        stroke(0);
        strokeWeight(2);
        line(x = line.x1, y = line.y1, line.x2, line.y2);
    }

    x = mouseX;
    y = mouseY;
}

function clearCanvas() {
    drawing = [];
    undone = [];
    background(200);
}

function undoLast() {
    if (drawing.length > 0) {
        undone.push(drawing.pop());
    }
}

function redoLast() {
    if (undone.length > 0) {
        drawing.push(undone.pop());
    }
}
