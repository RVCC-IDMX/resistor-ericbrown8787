import { getResistorOhms } from './resistor.js';
import { Utils } from './utils.js';
const log = console.log()
const select = Utils.select;
const listen = Utils.listen;
const keys = Object.keys;

const resistor = {};

const firstBand ={ 
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

const secondBand ={ 
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

const multiplierBand ={ 
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

const toleranceBand ={ 
    brown: select('#color3 .brown'),
    red: select('#color3 .red'),
    green: select('#color3 .green'),
    blue: select('#color3 .blue'),
    violet: select('#color3 .violet'),
    grey: select('#color3 .grey'),
    gold: select('#color3 .gold'),
    silver: select('#color3 .silver'),
}

keys(firstBand).forEach(color => {
    const element = firstBand[color];
    listen(element, 'click', () => {
        const colorName = element.classList[1];
        resistor['color1'] = colorName;    
        console.log(calculateResistorOhms());
    });
});

keys(secondBand).forEach(color => {
    const element = secondBand[color];
    listen(element, 'click', () => {
        const colorName = element.classList[1];
        resistor['color2'] = colorName;    
        console.log(calculateResistorOhms());
    });
});

keys(multiplierBand).forEach(color => {
    const element = multiplierBand[color];
    listen(element, 'click', () => {
        const colorName = element.classList[1];
        resistor['multiplier'] = colorName;    
        console.log(calculateResistorOhms());
    });
});

keys(toleranceBand).forEach(color => {
    const element = toleranceBand[color];
    listen(element, 'click', () => {
        const colorName = element.classList[1];
        resistor['tolerance'] = colorName;    
        console.log(calculateResistorOhms());

    });
});

function calculateResistorOhms(){
    console.log(`${resistor.color1} ${resistor.color2} ${resistor.multiplier} ${resistor.tolerance}`);
    return getResistorOhms(resistor);
}


