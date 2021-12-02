function multiplicationBigInt(a, b) {
  let arrayOne = [];
  let arrayTwo = [];  
 
  if (a < b){
arrayOne = a.toString().split('');
arrayTwo = b.toString().split('');  
} else {
arrayTwo = a.toString().split('');
arrayOne = b.toString().split('');   
}
let number = 0;
let arrayIn = [];
let arrayMultidimensional = [];
const arrayOff = [];
let index = 0;
for (let i = arrayOne.length - 1; i >= 0 ; i--){
  index = 0;
  for (let k = arrayTwo.length - 1; k >= 0 ; k--){ 
    number = arrayOne[i] * arrayTwo [k] + index;
    
    if (number > 9){
      let arraySplit = number.toString().split('');
      let inTheMaind = parseInt(arraySplit[0]);
      number = parseInt(arraySplit[1]);
      arrayIn.push(number);
      index = inTheMaind;
      if (k == 0){
        arrayIn.push(inTheMaind);
      }
    } 
    else {
      arrayIn.push(number);
      index = 0;
    }
  }
  arrayMultidimensional.push(arrayIn);
  arrayIn = [];
}
 console.log (arrayMultidimensional);
for (let i = 0; i < 2; i++){
  index = 0;
  arrayOff.push (arrayMultidimensional[i][0]);
  for (let k = 0; k < 3; k++){
    number = arrayMultidimensional[i][k] + arrayMultidimensional[i+1][k] + index;
    if (number > 9){
      let arraySplit = number.toString().split('');
      let inTheMaind = parseInt(arraySplit[0]);
      number = parseInt(arraySplit[1]);
      arrayMultidimensional[i+1][k] = number;
      index = inTheMaind;
    }
else {
      arrayMultidimensional[i+1][k] = number;
      index = 0;
    }
    
  }
}

console.log (arrayMultidimensional);
console.log (arrayOff);


arrayOff.reverse();
let str = arrayOff.join('');


}
 
console.log (multiplicationBigInt(120, 999));