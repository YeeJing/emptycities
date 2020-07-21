let table;
let test;
let i = 0;
let btn_up, btn_down, btn_next, btn_back;
let resetTime = 0;


function preload() {
  table = loadTable('asset/test1.csv', 'csv', 'header');
  listLength = (table.getRowCount());
  
  BOX_WIDTH = 500;
  BOX_HEIGHT = 500;
  BOX_DEPTH = 500;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  camera(0, 0, -(BOX_WIDTH / 1.2), 0, 0, 0, 0, 1, 0);

  FRONT_IMG = loadImage(table.get(i + 1, 'imgUrl'));
  TOP_IMG = loadImage(table.get(i + 2, 'imgUrl'));
  RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
  BOTTOM_IMG = loadImage(table.get(i + 4, 'imgUrl'));
  LEFT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
  
    //Make sure the box always fit the screen.
  SCALE_FACTOR = windowHeight / 3/
    Math.max(Math.max(BOX_WIDTH, BOX_HEIGHT), BOX_DEPTH);

  background(50);
  drawFaceBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH, FRONT_IMG, TOP_IMG, RIGHT_IMG, BOTTOM_IMG, LEFT_IMG);
  
  interval = setInterval(changeslide,12000);
}

function drawFaceBox(boxWidth, boxHeight, boxDepth,
  front, top, right, bottom, left) {
  angleMode(DEGREES);
  noStroke();
  let w = boxWidth * SCALE_FACTOR;
  let h = boxHeight * SCALE_FACTOR;
  let d = boxDepth * SCALE_FACTOR;

  // Center the box.
  translate(-w / 2, -h / 2);
  texture(front);
  quad(0, 0, w, 0, w, h, 0, h);

  fill(0);
  btn_up = createImg('button/up.png', 'this is upbutton');
  btn_up.position(1000,130,BOX_DEPTH)
  btn_up.mousePressed(up);

  btn_down = createImg('button/down.png', 'this is downbutton');
  btn_down.position(1000,1020,BOX_DEPTH);
  btn_down.mousePressed(down);

  btn_next = createImg('button/right.png', 'this is nextbutton');
  btn_next.position(1400,600,BOX_DEPTH);
  btn_next.mousePressed(next);

  btn_back = createImg('button/back.png', 'this is backbutton');
  btn_back.position(550,600,BOX_DEPTH);
  btn_back.mousePressed(back);


  push();
  texture(left);
  translate(0, 0, -d);
  rotateY(-90);
  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(top);
  translate(0, 0, -d);
  rotateX(90);
  quad(0, 0, w, 0, w, d, 0, d);

  pop();
  push();
  texture(right);
  translate(w, 0, 0);
  rotateY(90);
  quad(0, 0, d, 0, d, h, 0, h);

  pop();
  push();
  texture(bottom);
  translate(0, h, 0);
  rotateX(-90);
  quad(0, 0, w, 0, w, d, 0, d);

}

function draw() {
  drawFaceBox(BOX_WIDTH, BOX_HEIGHT, BOX_DEPTH, FRONT_IMG, TOP_IMG, RIGHT_IMG, BOTTOM_IMG, LEFT_IMG);
  

}

function keyReleased() {
  i++;
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
FRONT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
  TOP_IMG = loadImage(table.get(i + 2, 'imgUrl'));
  RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
  BOTTOM_IMG = loadImage(table.get(i + 4, 'imgUrl'));
  LEFT_IMG = loadImage(table.get(i+1 , 'imgUrl'));
  } else if (keyCode == LEFT_ARROW) {
    FRONT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 1, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5 , 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 2, 'imgUrl'));
     BOTTOM_IMG = loadImage(table.get(i + 4, 'imgUrl'));
  } else if (keyCode == UP_ARROW) {
    FRONT_IMG = loadImage(table.get(i + 2, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 6, 'imgUrl'));
    BOTTOM_IMG = loadImage(table.get(i + 1, 'imgUrl'));
    
  } else if (keyCode == DOWN_ARROW) {
    FRONT_IMG = loadImage(table.get(i + 4, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 1, 'imgUrl'));
    BOTTOM_IMG = loadImage(table.get(i + 6, 'imgUrl'));
  }
}

function mouseReleased() {
  i++;
}


function up() {
    FRONT_IMG = loadImage(table.get(i + 2, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 6, 'imgUrl'));
    BOTTOM_IMG = loadImage(table.get(i + 1, 'imgUrl'));
}

function down() {
 FRONT_IMG = loadImage(table.get(i + 4, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 1, 'imgUrl'));
    BOTTOM_IMG = loadImage(table.get(i + 6, 'imgUrl'));
}

function next() {
 FRONT_IMG = loadImage(table.get(i + 5, 'imgUrl'));
  TOP_IMG = loadImage(table.get(i + 2, 'imgUrl'));
  RIGHT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
  BOTTOM_IMG = loadImage(table.get(i + 4, 'imgUrl'));
  LEFT_IMG = loadImage(table.get(i+1 , 'imgUrl'));
}

function back() {
 FRONT_IMG = loadImage(table.get(i + 3, 'imgUrl'));
    RIGHT_IMG = loadImage(table.get(i + 1, 'imgUrl'));
    LEFT_IMG = loadImage(table.get(i + 5 , 'imgUrl'));
    TOP_IMG = loadImage(table.get(i + 2, 'imgUrl'));
     BOTTOM_IMG = loadImage(table.get(i + 4, 'imgUrl'));
}

function changeslide(){
  FRONT_IMG = loadImage(table.get(i + 20, 'imgUrl'));
  i++;
  
}

