import { getResistorOhms } from './resistor.js';
import { Utils } from './utils.js';
const properCase = Utils.properCase;
const select = Utils.select;
const listen = Utils.listen;
const keys = Object.keys;

// ======Resistor Model======
const resistor = {
    color1: {
      diagramBand: select('#b0'),
      selectionButtons: select('.band0'),
      color: 'red',
    },
    color2: {
      diagramBand: select('#b1'),
      selectionButtons: select('.band1'),
      color: 'green',
    }, 
    multiplier: {
      diagramBand: select('#b2'),
      selectionButtons: select('.band2'),
      color: 'violet',},
    tolerance: {
      diagramBand: select('#b3'),
      selectionButtons: select('.band3'),
      color: 'gold',
    },

};

// ======DOM Elements======

const resistorValue = document.querySelector('.answer');

const firstBandButtons = {
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
};

const secondBandButtons = {
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
};

const multiplierBandButtons = {
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
};

const toleranceBandButtons = {
  brown: select('#color3 .brown'),
  red: select('#color3 .red'),
  green: select('#color3 .green'),
  blue: select('#color3 .blue'),
  violet: select('#color3 .violet'),
  grey: select('#color3 .grey'),
  gold: select('#color3 .gold'),
  silver: select('#color3 .silver'),
};


// ======Functions======
/**
 * Displays the currently selected color for a given band in the associated interface element's heading
 * @param {String} whatProperty -The key of the property of the resistor object being displayed
 */
const updateSelectedDisplay = function(whatProperty){
  const property = resistor[whatProperty]
  const newColor = property.color;
  const selectionDisplay = select('h2 span.selected', property.selectionButtons);
  if (selectionDisplay.classList.length > 1) {
    const oldColor = selectionDisplay.classList[1];
    selectionDisplay.classList.replace(oldColor,newColor);
  } else {
    selectionDisplay.classList.add(newColor);
  }
  selectionDisplay.innerText = `${properCase(newColor)}`;
}

/**
 * Updates the resistor diagram to reflect the currently selected colors
 */
const updateDiagram = function(){
  keys(resistor).forEach((band) => {
    const display = resistor[band].diagramBand;
    const currentColor = display.classList[1];
    const newColor = resistor[band].color;
    display.classList.replace(currentColor,newColor);
  });
}

/**
 * Calculates and displays the resistance of the resistor currently represented by the resistor model.
 */
const updateValueDisplay = function () {
  resistorValue.innerText = getResistorOhms(getBands());
};

/**
 * Updates the resistor model with the color associated with an interface button 
 * @param {Element} inputButton - The button clicked
 * @param {String} whatProperty - The key of the property to update in the resistor model
 */
const updateResistorModel = function (inputButton, whatProperty) {
  resistor[whatProperty].color = inputButton.classList[1];
};

/**
 * @returns An object containing the currently selected color values for passing into getResistorOhms()
 */
const getBands= function(){
      return{
        color1: resistor.color1.color,
        color2: resistor.color2.color,
        multiplier: resistor.multiplier.color,
        tolerance: resistor.tolerance.color,
      }
    }


// ======Event Listeners======
keys(firstBandButtons).forEach((color) => {
  const button = firstBandButtons[color];
  listen(button, 'click', () => {
    updateResistorModel(button, 'color1');
    updateSelectedDisplay('color1');
    updateDiagram();
    updateValueDisplay();
  });
});

keys(secondBandButtons).forEach((color) => {
  const button = secondBandButtons[color];
  listen(button, 'click', () => {
    updateResistorModel(button, 'color2');
    updateSelectedDisplay('color2');
    updateDiagram();
    updateValueDisplay();
  });
});

keys(multiplierBandButtons).forEach((color) => {
  const button = multiplierBandButtons[color];
  listen(button, 'click', () => {
    updateResistorModel(button, 'multiplier');
    updateSelectedDisplay('multiplier');
    updateDiagram();
    updateValueDisplay();
  });
});

keys(toleranceBandButtons).forEach((color) => {
  const button = toleranceBandButtons[color];
  listen(button, 'click', () => {
    updateResistorModel(button, 'tolerance');
    updateSelectedDisplay('tolerance');
    updateDiagram();
    updateValueDisplay();
  });
});

updateSelectedDisplay('color1');
updateSelectedDisplay('color2');
updateSelectedDisplay('multiplier');
updateSelectedDisplay('tolerance');
