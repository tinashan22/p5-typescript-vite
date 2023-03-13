import P5 from "p5";
import "./style.css";

// const sqsketch = (p5: P5) => {
//   p5.setup = () => {
//     p5.createCanvas(800, 800);
//     p5.background(225, 218, 195);
//   };

//   p5.draw = () => {
//     p5.strokeWeight(2);
//     //one sq
//     p5.stroke(200, 200, 200);
//     p5.fill(225, 218, 195);
//     p5.rect(50, 50, 700, 700);

//     let x = 20;

//     p5.stroke(200, 200, 200);
//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);

//     x = 40;

//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);

//     x = 60;

//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);

//     x = 80;

//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);

//     x = 100;

//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);

//     p5.stroke(231, 201, 212);

//     p5.strokeWeight(3);
//     x = 140;

//     p5.fill(225, 218, 195);
//     p5.rect(50 + x, 50 + x, 700 - 2 * x, 700 - 2 * x);
//   };
// };

const regsketch = (p5: P5) => {
  let colorPairs = [
    //[0] = border [1] = center [2] = line grid
    [
      //gray
      p5.color(82, 80, 81),
      //white
      p5.color(251, 249, 244),
      //red
      p5.color(197, 55, 18),
    ],
    [
      //black
      p5.color(49, 48, 39),

      //pale yellow
      p5.color(250, 236, 153),
      //white
      p5.color(251, 249, 244),
    ],
    [
      // yellow
      p5.color(251, 231, 119),
      //black
      p5.color(28, 27, 22),
      //white
      p5.color(251, 249, 244),
    ],
    //no vertical line
    [
      //black
      p5.color(28, 27, 22),
      //white
      p5.color(251, 249, 244),
      //pale yellow
      p5.color(251, 231, 119),
    ],

    //only one horizontal line & no vertical line
    [
      //white
      p5.color(251, 249, 244),
      //orange
      p5.color(237, 143, 38),

      //black
      p5.color(28, 27, 22),
    ],
  ];
  let colorIndex = p5.int(p5.random(0, colorPairs.length));
  // let colorIndex = 3;

  //vertical line variations
  let onlyCenterVerticalLine = false;
  let noVerticalLine = false;
  if (colorIndex == 3 || colorIndex == 4) {
    noVerticalLine = true;
  }

  //horizontal line variations
  let oneHorizontalLine = false;
  if (colorIndex == 4) {
    oneHorizontalLine = true;
  }

  let canvasHeight = 560;
  let canvasWidth = 760;
  p5.setup = () => {
    p5.createCanvas(canvasWidth, canvasHeight);

    // p5.background(82, 80, 81);
    p5.background(colorPairs[colorIndex][0]);
  };

  p5.draw = () => {
    //draw center rect
    let x = 75;
    p5.strokeWeight(0);
    // p5.fill(251, 249, 244);
    p5.fill(colorPairs[colorIndex][1]);
    p5.rect(x, x, canvasWidth - 2 * x, canvasHeight - 2 * x);

    //draw grid lines
    let lineX = canvasWidth / 4;
    let lineY = canvasHeight / 3;
    let strokeWeight = 15;
    p5.strokeWeight(15);
    //grid lines
    p5.stroke(colorPairs[colorIndex][2]);
    if (noVerticalLine) {
    } else if (onlyCenterVerticalLine) {
      let lineX2 = lineX * 2 + strokeWeight / 2;

      p5.line(lineX2, 0, lineX2, canvasHeight);
    } else {
      //3 vertical lines
      p5.line(lineX, 0, lineX, canvasHeight);

      let lineX2 = lineX * 2 + strokeWeight / 2;

      p5.line(lineX2, 0, lineX2, canvasHeight);

      let lineX3 = lineX * 3 + strokeWeight;

      p5.line(lineX3, 0, lineX3, canvasHeight);
    }

    //horizontal lines
    if (oneHorizontalLine) {
      p5.line(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
    } else {
      p5.line(0, lineY, canvasWidth, lineY);
      let lineY2 = lineY * 2 + strokeWeight / 2;
      p5.line(0, lineY2, canvasWidth, lineY2);
    }
  };
};

new P5(regsketch);
