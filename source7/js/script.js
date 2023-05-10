const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

/**
 * The font property specifies the current text style to use when srawing text
 * Value: a string parsed as css font value. The default font is 10px sans-serif
 */
// ctx.font = "bold 48px serif";
// ctx.fillText("Hi!", 150, 50);

// ==============================

/**
 * The 'direction' property specify the current text direction used to draw text
 * value:
 * +) ltr: the text direction is left to right
 * +) rtl: the text direction is right to left
 * +) inherit: the text direction is inherited from document
 */
// ctx.direction = "rtl";
// ctx.font = "48px serif";
// ctx.fillText("Hi!", 150, 130)

// ==============================

/**
 * The fillStyle property specifies the color, gradient or pattern to use inside shapes. the default style is #000
 * value: one of the following
 * +) a string parsed as css <color> value
 * +) a CanvasGradient object
 * +) a CanvasPattern object
 */
// ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 100, 100);

// ==============================

/**
 * The globalAlpha property specifiex the transparency value that is applued to shapes and images before they are drawn onto the canvas
 * Value: anumber between 0.0 to 1.0. The default value is 1.0
 */
// ctx.globalAlpha = 0.5;
// ctx.fillStyle = 'red';
// ctx.fillRect(50, 50, 100, 100);
// ctx.fillStyle = 'blue';
// ctx.fillRect(10, 10, 100, 100);

// ==============================

/**
 * The 'lineCap' property determines the shape used to draw the end points of lines
 * Value: one of the following
 * +) butt: the ends of lines are squared off at the endpoints. Default value
 * +) round: the ends of lines are rounded
 * +) square: the ends of lines are squared off by adding a box with and equa width and half the height of the line's thickness
 */

// Draw guides
// ctx.strokeStyle = '#09f';
// ctx.beginPath();
// ctx.moveTo(10, 10);
// ctx.lineTo(140, 10);
// ctx.moveTo(10, 140);
// ctx.lineTo(140, 140);
// ctx.stroke();

// // Draw lines
// ctx.strokeStyle = 'black';
// ['butt', 'round', 'square'].forEach((lineCap, i) => {
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap;
//   ctx.beginPath();
//   ctx.moveTo(25 + i * 50, 10);
//   ctx.lineTo(25 + i * 50, 140);
//   ctx.stroke();
// });

// ==============================

/**
 * The lineJoin property determines the shape used to join line segments where they meet. This property has no efect wherever two conneted segments have the same direction, because no joining area will be added in this case.
 *
 * Value:
 * +) round
 * +) bevel
 * +) miter
 *
 */

// ctx.lineWidth = 20;
// ctx.lineJoin = "round";
// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(190, 100);
// ctx.lineTo(280, 20);
// ctx.lineTo(280, 150);
// ctx.stroke();

// ["round", "bevel", "miter"].forEach((join, i) => {
//     ctx.lineJoin = join;
//     ctx.beginPath();
//     ctx.moveTo(-5, 5 + i * 40);
//     ctx.lineTo(35, 45 + i * 40);
//     ctx.lineTo(75, 5 + i * 40);
//     ctx.lineTo(115, 45 + i * 40);
//     ctx.lineTo(155, 5 + i * 40);
//     ctx.stroke();
// });

// ==============================

/**
 * The lineWidth property sets the thickness of lines
 * Value: a number specifying the line width
 */
// ctx.lineWidth = 15;
// ctx.beginPath();
// ctx.moveTo(20, 20);
// ctx.lineTo(130, 130);
// ctx.rect(40, 40, 70, 70);
// ctx.stroke();

// ==============================

/**
 * The shadowBlur property specifies the color of shadows
 * Value: a string parsed as a CSS color. The default value is fully transparent black
 *
 * The shadowOffsetX property specifies the distance that shadows will be offset horizontally. The shadowOffsetY property specifies the distance that shadows will be offset vertically.
*/
// ctx.shadowColor = "red";
// ctx.shadowBlur = 15;
// ctx.shadowOffsetX = 10;
// ctx.shadowOffsetY = 10;

// ctx.fillStyle = "yellow";
// ctx.fillRect(20, 20, 150, 100);

// ==============================

/**
 * The strokeStyle property specifies the color, gradient or pattern to use the strokes around shapes.
 * Value:
 * +) color: a string parsed as css
 * +) gradient: a gradient object
 * +) pattern: a CanvasPattern object
 */
// ctx.strokeStyle = "blue";
// ctx.strokeRect(10, 10, 100, 100);

// ==============================

/**
 * The textAlign property specifies the current text alignment used when drawing text. The alignment is relative to the x value of the fillText() method. For example, if the textAlign is "center", the the text's left edge will be at x - (textWidth - 2);
 *
 * Value: possible value: left, right, center, start, end
 */

// const x = canvas.width / 2;

// ctx.beginPath();
// ctx.moveTo(x, 0);
// ctx.lineTo(x, canvas.height);
// ctx.stroke();

// ctx.font = '30px serif';

// ctx.textAlign = 'left';
// ctx.fillText('left-aligned', x, 40);

// ctx.textAlign = 'center';
// ctx.fillText('center-aligned', x, 85);

// ctx.textAlign = 'right';
// ctx.fillText('right-aligned', x, 130);