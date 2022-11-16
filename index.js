import { getResistorOhms } from './resistor.js';
import { Utils } from './utils.js';
const log = console.log;
const select = Utils.select;
const listen = Utils.listen;
const sanitize = Utils.sanitizeInput;
const keys = Object.keys;

const resistor = {
    band0: select('#b0'),
    band1: select('#b1'),
    band2: select('#b2'),
    band3: select('#b3'),
    bands: {
        color1: 'red',
        color2: 'green',
        multiplier:'violet',
        tolerance: 'gold',
    }
};

const calculateResistorOhms = function(){
    return getResistorOhms(resistor.bands);
}

const updateResistorModel = function(inputButton,whatBand,whatProperty){
        const displayedBand = resistor[whatBand];
        const displayedColor = displayedBand.classList[1];
        const newColor = inputButton.classList[1];
        resistor.bands[whatProperty] = newColor;
        displayedBand.classList.replace(displayedColor,newColor);
}

const updateValueDisplay = function(){
    const newValue = calculateResistorOhms();
    resistorValue.innerText = newValue;
}

const resistorValue = document.querySelector('.answer');

const firstBandButtons ={ 
    black: select('#color0 .black'),
    brown: select('#color0 .brown'),
    red: select('#color0 .red'),
    orange: select('#color0 .orange'),
    yellow: select('#color0 .yellow'),
    green: select('#color0 .green'),
    blue: select('#color0 .blue'),
    violet: select('#color0 .violet'),
    grey: select('#color0 .grey'),
    white: select('#color0 .white'),
}

const secondBandButtons ={ 
    black: select('#color1 .black'),
    brown: select('#color1 .brown'),
    red: select('#color1 .red'),
    orange: select('#color1 .orange'),
    yellow: select('#color1 .yellow'),
    green: select('#color1 .green'),
    blue: select('#color1 .blue'),
    violet: select('#color1 .violet'),
    grey: select('#color1 .grey'),
    white: select('#color1 .white'),
}

const multiplierBandButtons ={ 
    black: select('#color2 .black'),
    brown: select('#color2 .brown'),
    red: select('#color2 .red'),
    orange: select('#color2 .orange'),
    yellow: select('#color2 .yellow'),
    green: select('#color2 .green'),
    blue: select('#color2 .blue'),
    violet: select('#color2 .violet'),
    grey: select('#color2 .grey'),
    white: select('#color2 .white'),
    gold: select('#color2 .gold'),
    silver: select('#color2 .silver'),
}

const toleranceBandButtons ={ 
    brown: select('#color3 .brown'),
    red: select('#color3 .red'),
    green: select('#color3 .green'),
    blue: select('#color3 .blue'),
    violet: select('#color3 .violet'),
    grey: select('#color3 .grey'),
    gold: select('#color3 .gold'),
    silver: select('#color3 .silver'),
}



keys(firstBandButtons).forEach(color => {
    const button = firstBandButtons[color];
    listen(button, 'click', () => {
        updateResistorModel(button,'band0','color1');
        updateValueDisplay();
    });
});

keys(secondBandButtons).forEach(color => {
    const button = secondBandButtons[color];
    listen(button, 'click', () => {
        updateResistorModel(button,'band1','color2');
        updateValueDisplay();
    });
});

keys(multiplierBandButtons).forEach(color => {
    const button = multiplierBandButtons[color];
    listen(button, 'click', () => {
        updateResistorModel(button,'band2','multiplier');   
        updateValueDisplay();
    });
});

keys(toleranceBandButtons).forEach(color => {
    const button = toleranceBandButtons[color];
    listen(button, 'click', () => {
        updateResistorModel(button,'band3','tolerance');
        updateValueDisplay();
    });
});




