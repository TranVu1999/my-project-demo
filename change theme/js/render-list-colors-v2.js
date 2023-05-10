setTimeout(() => {
    const numberColors = 15;
    const rangeOfColor = 7;
    const fraction = 1 / (numberColors - 1);
    let contractionBoundary = 220;
    contractionBoundary = 160;


    let style = document.createElement('style');
    style.innerHTML = ``;
    document.getElementsByTagName('head')[0].appendChild(style);

    const colorPaletteElms = document.getElementsByClassName('color-palette');
    for(let colorPaletteElm of colorPaletteElms) {
        const colorCode = colorPaletteElm.dataset.colorCode;
        const colorLabel = colorPaletteElm.dataset.label;


        if(colorCode && colorLabel) {
            createColors(colorLabel, h2r(colorCode));

            // create palette colors
            const creativeColorsElm = colorPaletteElm.getElementsByClassName('creative-colors')[0];
            if(creativeColorsElm) {
                let creativeColorsElmContent = '';
                for(let i = 0; i < numberColors; i++) {
                    creativeColorsElmContent += `<li class="text-center color ${colorLabel}-${i}">${colorLabel}-${i}</li>`
                }
                creativeColorsElm.innerHTML = creativeColorsElmContent;
            }
        }
    }

    let countCombineClasses = 0;
    let countTimes = 0;
    const combineClassesElm = document.getElementById('combineClasses');
    function createCombineClasses() {
        let resStyleContent = '';
        let combineClassesElmContent = '';

        if(combineClassesElm) {
            const bgColors = [];
            const textColors = [];

            for(let colorPaletteElm of colorPaletteElms) {
                const colorCode = colorPaletteElm.dataset.colorCode;
                const colorLabel = colorPaletteElm.dataset.label;


                if(colorCode && colorLabel) {
                    const obj = { key: colorLabel, value: colorCode };

                    if(colorLabel.includes('bg')) {
                        bgColors.push(obj);
                    } else {
                        textColors.push(obj);
                    }
                }
            }

            for(let bgIdx = 0; bgIdx < bgColors.length; bgIdx++) {
                for(let textIdx = 0; textIdx < textColors.length; textIdx++) {

                    for(let start = 0; start < numberColors; start++) {
                        const textIndexStart = start < rangeOfColor ? start + rangeOfColor : 0;
                        const textIndexEnd = start < rangeOfColor ? numberColors : start - rangeOfColor;

                        for(let end = textIndexStart; end < textIndexEnd; end++) {

                            countTimes++;
                            const bgColorValName = `${bgColors[bgIdx].key}-${start}`;
                            const textColorValName = `${textColors[textIdx].key}-${end}`;

                            const resClass = `${bgColorValName}--${textColorValName}`;

                            const constractNumber = calContrastion(
                                h2r(getComputedStyle(document.body).getPropertyValue(`--${bgColorValName}`)),
                                h2r(getComputedStyle(document.body).getPropertyValue(`--${textColorValName}`))
                            )

                            if(constractNumber > contractionBoundary) {
                                countCombineClasses++;
                                resStyleContent += '.' + resClass + `{
                                    background-color: var(--${bgColors[bgIdx].key}-${start});
                                    color: var(--${textColors[textIdx].key}-${end});
                                }`;

                                combineClassesElmContent += `<div class="col-2 fw-bold text-center">
                                    <div class="${resClass} combine-class">${resClass} <br/> ${constractNumber}</div>
                                </div>`;
                            }
                        }
                    }
                }
            }
            style.innerHTML += resStyleContent;
            combineClassesElm.innerHTML = combineClassesElmContent;
        }
    }

    createCombineClasses();

    console.log('amount of combine classes: ', countCombineClasses);
    console.log('countTimes: ', countTimes);

    function h2r(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    };

    function r2h(rgb) {
        return "#" + ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    };

    function interpolateColor(color1, color2, factor) {
        if (arguments.length < 3) { factor = 0.5; }
        var result = color1.slice();

        for (var i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    };


    function createColors(prefix, originalColor) {

        let resStyleContent = ''
        for(let idx = 0; idx < numberColors; idx++) {
            const icol = interpolateColor(originalColor, [255, 255, 255], fraction * idx);
            const hcol = r2h(icol);

            const colorVariable = `--${prefix}-${idx}`;
            document.documentElement.style.setProperty(colorVariable, hcol);

            const propertyName = prefix.includes('bg') ? 'background-color' : 'color';
            const colorVal = `var(${colorVariable})`;

            resStyleContent +=`.${prefix}-${idx} {${propertyName}: ${colorVal};}`;
        }

        style.innerHTML += resStyleContent;
    }

    function calContrastion(color1, color2) {
        return Math.sqrt(Math.pow(color1[0] - color2[0], 2) + Math.pow(color1[1] - color2[1], 2) + Math.pow(color1[2] - color2[2], 2));
    }

    console.log('distance: ', calContrastion(h2r('#ddf3dd'), h2r('#91949b')));
}, 10);

let bgColorCodes = ['042d56', '0fa810', '91949b', '7A2022', 'ffffff'];
let textColorCodes = ['042d56', '0fa810', '91949b', 'ff4a70', '0a74ef'];

bgColorCodes = ['400002', 'a8170f', '91949b', '7A2022', 'ffffff'];
textColorCodes = ['400002', 'a8170f', '91949b', 'ff6600', '009ece'];

function rederBackgroundColorElments() {
    const backgroundColorElm = document.getElementById('backgroundColors');
    if(backgroundColorElm) {
        let backgroundColorElmInnerHTML = '';

        bgColorCodes.forEach((codeColor, index) => {
                backgroundColorElmInnerHTML += `<div class="col color-palette" data-label="bg-${index}" data-color-code="${codeColor}">
                <div class="color-result" style="background-color: #${codeColor};"></div>
                <ul class="mt-5 list-inline creative-colors"></ul>
            </div>`;
        });

        backgroundColorElm.innerHTML = backgroundColorElmInnerHTML;
    }
}

rederBackgroundColorElments();

function rederTextColorElments() {
    const textElm = document.getElementById('textColors');
    if(textElm) {
        let textElmInnerHTML = '';

        textColorCodes.forEach((codeColor, index) => {
            textElmInnerHTML += `<div class="col color-palette color-palette--text" data-label="text-${index}" data-color-code="${codeColor}">
                <div class="color-result" style="background-color: #${codeColor};"></div>
                <ul class="mt-5 list-inline creative-colors"> </ul>
            </div>`;
        });

        textElm.innerHTML = textElmInnerHTML;
    }
}

rederTextColorElments();





