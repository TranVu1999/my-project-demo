

const numberColors = 15;
const oneDimensionalColorTable = [];
const rangeOfColor = 7;

var style = document.createElement('style');
style.innerHTML = ``;
resultClasses = '';
document.getElementsByTagName('head')[0].appendChild(style);
const fraction = 1 / (numberColors - 1);

// return true if the color is light, otherwise return false.
function lightOrDark(color) {

    r = color[1];
    g = color[2];
    b = color[3];

    // HSP equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp>127.5) {

      return true;
    }
    return false;
}

var h2r = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

var r2h = function(rgb) {
    return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
};

// Interpolates two [r,g,b] colors and returns an [r,g,b] of the result
var _interpolateColor = function(color1, color2, factor) {
    if (arguments.length < 3) { factor = 0.5; }
    var result = color1.slice();

    for (var i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
};


function createColors(prefix, originalColor) {

    for(let idx = 0; idx < numberColors; idx++) {
        const icol = _interpolateColor(originalColor, [255, 255, 255], fraction * idx);
        const hcol = r2h(icol);
        oneDimensionalColorTable.push(icol);

        resultClasses += `
            .bg-${prefix}-${idx} {
                background-color: ${hcol};
                color: ${lightOrDark(hcol) ? '#000000' : '#ffffff'}
            }
            .text-${prefix}-${idx} {
                color: ${hcol}!important;
            }

        `;
        style.innerHTML += `.bg-${prefix}-${idx} {background-color: ${hcol};}.text-${prefix}-${idx} {color: ${hcol};}`;
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

function renderListColorItems(prefix, idElement) {
    const containerElm = document.getElementById(idElement);

    if(containerElm) {
        for(let i = 0; i < numberColors; i++) {
            containerElm.innerHTML += `<div class="bg-color${prefix}-${i} color-item">bg-${prefix}-${i}</div>`;
        }
    }
}

const mainColor0Elm = document.getElementById('mainColor0');
const mainColor0 = h2r(mainColor0Elm.value);
createColors('color0', mainColor0, lightOrDark(mainColor0Elm.value));
mainColor0Elm.addEventListener('change', e => {
    createColors('color0', h2r(e.target.value), lightOrDark(e.target.value));
});

const mainColor1Elm = document.getElementById('mainColor1');
const mainColor1 = h2r(mainColor1Elm.value);
createColors('color1', mainColor1);
mainColor1Elm.addEventListener('change', e => {
    createColors('color1', h2r(e.target.value), lightOrDark(e.target.value));
});

const mainColor2Elm = document.getElementById('mainColor2');
const mainColor2 = h2r(mainColor2Elm.value);
createColors('color2', mainColor2);
mainColor2Elm.addEventListener('change', e => {
    createColors('color2', h2r(e.target.value), lightOrDark(e.target.value));
});

const mainColor3Elm = document.getElementById('mainColor3');
const mainColor3 = h2r(mainColor3Elm.value);
createColors('color3', mainColor3);
mainColor3Elm.addEventListener('change', e => {
    createColors('color3', h2r(e.target.value), lightOrDark(e.target.value));
});

const mainColor4Elm = document.getElementById('mainColor4');
const mainColor4 = h2r(mainColor4Elm.value);
createColors('color4', mainColor4);
mainColor4Elm.addEventListener('change', e => {
    createColors('color4', h2r(e.target.value), lightOrDark(e.target.value));
});

const mainColor5Elm = document.getElementById('mainColor5');
const mainColor5 = h2r(mainColor5Elm.value);
createColors('color5', mainColor5);
mainColor5Elm.addEventListener('change', e => {
    createColors('color5', h2r(e.target.value), lightOrDark(e.target.value));
});



renderListColorItems('0', 'listColors0');
renderListColorItems('1', 'listColors1');
renderListColorItems('2', 'listColors2');
renderListColorItems('3', 'listColors3');
renderListColorItems('4', 'listColors4');
renderListColorItems('5', 'listColors5');

function calContrastion(color1, color2) {
    return Math.sqrt(Math.pow(color1[0] - color2[0], 2) + Math.pow(color1[1] - color2[1], 2) + Math.pow(color1[2] - color2[2], 2));
}

const listColors0000Elm = document.getElementById('listColors0000');

let count = 0;

function createCombineBackgroundAndColor() {
    console.time('execute')
    let resDivContent = '';
    let resStyleContent = '';

    for(let i = 0; i < oneDimensionalColorTable.length; i++) {
        for(let j = 0; j < oneDimensionalColorTable.length; j++) {
            const bgColor = oneDimensionalColorTable[i];
            const textColor = oneDimensionalColorTable[j];
            if(Math.abs(i % numberColors - j % numberColors) > rangeOfColor) {
                // count++;

                if(calContrastion(bgColor, textColor) > 140) {
                    count++;
                    const bgColorNumber = Math.floor(i / numberColors);
                    const bgBlurColorNumber = i % numberColors;
                    const textColorNumber = Math.floor(j / numberColors);
                    const textBlurColorNumber = j % numberColors;

                    resDivContent += `<div
                        class="col-2 color-picker bg-${bgColorNumber }-${bgBlurColorNumber}--text-${textColorNumber }-${textBlurColorNumber}"
                    >
                        bg-${bgColorNumber }-${bgBlurColorNumber}--text-${textColorNumber }-${textBlurColorNumber}
                    </div>`;

                    resStyleContent += `
                        .bg-${bgColorNumber }-${bgBlurColorNumber}--text-${textColorNumber }-${textBlurColorNumber} {
                            color: rgb(${textColor[0]}, ${textColor[1]}, ${textColor[2]});
                            background-color: rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]});
                        }
                    `;

                    resultClasses += `
                        .bg-${bgColorNumber }-${bgBlurColorNumber}--text-${textColorNumber }-${textBlurColorNumber} {
                            color: rgb(${textColor[0]}, ${textColor[1]}, ${textColor[2]});
                            background-color: rgb(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]});
                        }
                    `;
                }
            }

        }
    }

    listColors0000Elm.innerHTML = resDivContent;
    style.innerHTML += resStyleContent;
    console.timeEnd('execute')
}

createCombineBackgroundAndColor();
localStorage.setItem('theme', resultClasses);
console.log('total time: ', count * 0.003662109375);
console.log('count: ', count);




