let img;
let canvas;
let check = false;
let bgcolor = 0;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("canvasWrapper");
  background(0);

  let uploadElement = document.getElementById("imageUpload");
  uploadElement.addEventListener("change", handleImageUpload);
}

function handleImageUpload(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

function draw() {
  if (check) {
    background(bgcolor);
    check = false;
  }

  if (img) {
    push();
    translate(mouseX, mouseY);
    image(img, -25, -25, 50, 50);
    pop();
  }
}

function keyPressed() {
  if (key === 'r') {
    check = true;
    bgcolor = random(255);
  }

  if (key === 's') {
    saveCanvas(canvas);
  }
}
