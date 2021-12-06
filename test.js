function factorial(n){

  if (n == 0) {
    return "1";
  }
  let resalt = 1;
    for (let i = 1; i < n + 1; i++){
    resalt = multiplicationBigInt(resalt, i);
  }
    
return resalt;
}
console.log (factorial(1000000000)); 

function multiplicationBigInt(a, b) {
  let arrayOne = [];
  let arrayTwo = [];  
  let arrayMultidimensionalIn = [];
  let arrayMultidimensionalOff = [];
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
      inTheMaind = 0;
    }
  }
  arrayMultidimensional.push(arrayIn);
  arrayIn = [];
}
for ( let i = 0; i < arrayMultidimensional.length - 1; i++){
  
  arrayMultidimensionalIn.push(arrayMultidimensional[i].shift());
 
  
  arrayMultidimensional[i+1] = sumArray (arrayMultidimensional[i], arrayMultidimensional [i+1]);
 
}
 
arrayMultidimensionalOff = arrayMultidimensionalIn.concat(arrayMultidimensional[arrayMultidimensional.length - 1]);
 
arrayMultidimensionalOff.reverse();
return arrayMultidimensionalOff.join('');
 
} 
 
function sumArray (a, b){

let arraySum = [];
 
let index = 0;
 
let inTheMaind = 0;
 
for (let i = 0; i < a.length; i++){
  number = a[i] + b[i] + index;
  if (number > 9){
    let arraySplit = number.toString().split('');
    inTheMaind = parseInt(arraySplit[0]);
    number = parseInt(arraySplit[1]);
    arraySum.push(number);
    index = inTheMaind;
  } 
  else {
    arraySum.push(number);
    index = 0;
    inTheMaind = 0;
  }
  if ((i == a.length - 1) && (i < b.length) && (b.length != a.length)){
    for ( let k = i+1; k < b.length; k++){
      number = b[k] + inTheMaind;
    if (number > 9){
      let arraySplit = number.toString().split('');
      inTheMaind = parseInt(arraySplit[0]);
      number = parseInt(arraySplit[1]);
      arraySum.push(number);
    } 
    else {
      arraySum.push(number);
      index = 0;
      inTheMaind = 0;
    }
    if ((k == b.length - 1) && (inTheMaind != 0)){
      arraySum.push(inTheMaind);
      index = 0;
      inTheMaind = 0;
    }
    }

    
  }
  if ((i == a.length - 1) && (b.length == a.length) && (inTheMaind != 0)){
    arraySum.push(inTheMaind);
  }
}
return arraySum;
}
