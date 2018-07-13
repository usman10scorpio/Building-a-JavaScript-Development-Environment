import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log('------------------------------------');
console.log(`i would pay ${courseValue} for this awesoem course`); //` back ticks will tell js to parse any js variables
console.log('------------------------------------');