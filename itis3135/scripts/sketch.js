let strokes = [];        // All completed strokes
let undoneStrokes = [];  // Redo stack
let currentStroke = [];  // The stroke being drawn

function setup() {
    const canvas = createCanvas(600, 400);
    canvas.parent('drawingArea');
    background(200);

    // Clear button
    document.getElementById('clearBtn').addEventListener('click', () => {
        strokes = [];
        undoneStrokes = [];
        background(200);
    });

    // Undo button
    document.getElementById('undoBtn').addEventListener('click', () => {
        if (strokes.length > 0) {
            undoneStrokes.push(strokes.pop());
        }
        redrawCanvas();
    });

    // Redo button
    document.getElementById('redoBtn').addEventListener('click', () => {
        if (undoneStrokes.length > 0) {
            strokes.push(undoneStrokes.pop());
        }
        redrawCanvas();
    });
}

function draw() {
    background(200);
    stroke(0);
    strokeWeight(2);
    noFill();

    // Draw all saved strokes
    for (let strokeSet of strokes) {
        beginShape();
        for (let pt of strokeSet) {
            vertex(pt.x, pt.y);
        }
        endShape();
    }

    // Draw current stroke while dragging
    if (mouseIsPressed && currentStroke.length > 0) {
        beginShape();
        for (let pt of currentStroke) {
            vertex(pt.x, pt.y);
        }
        endShape();
    }
}

function mousePressed() {
    currentStroke = [];
}

function mouseDragged() {
    currentStroke.push({ x: mouseX, y: mouseY });
}

function mouseReleased() {
    if (currentStroke.length > 0) {
        strokes.push(currentStroke);
        currentStroke = [];
        undoneStrokes = []; // Clear redo stack after new stroke
    }
}
