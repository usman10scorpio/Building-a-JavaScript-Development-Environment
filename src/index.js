import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`i would pay ${courseValue} for this awesoem course`); // eslint-disable-line no-console
//` back ticks will tell js to parse any js variables