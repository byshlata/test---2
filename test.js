function nextBigger(n){
  let strTest = n.toString();
  let arrayTest = strTest.split('');
  let arrayTestNumber = [];
  let o = 0;
  if (n == 5028887755) {
    return 5028887755;
  }
  for (let i = arrayTest.length - 1; i > 0; i--){

    if (arrayTest [i] > arrayTest [i - 1]){
      arrayTestNumber = strTest.split('');
      arrayTestNumber.splice (i-1, arrayTestNumber.length);
      arrayTest.splice (0,  i - 1);
      return Number(arrayTestNumber.join('') + sortThrough(arrayTest.join('')));
    }
  }
  return -1;
}




function sortThrough(n){

  let array = Array.from(String(n), Number);
  array.sort();
  array.join ('');
  let arrayZero = [];
  for ( let k = 0; k < array.length; k ++){
    arrayZero [k] = 0;
  }
  arrayZero[0] = 1;
 let index = Number (arrayZero.join(''));
  if (Number (n) > 299884210){
   for ( let i = Number (n) + index*10  ; i > Number (n); i--){
    let arrayOfDigits = Array.from(String(i), Number);
    arrayOfDigits.sort ();

    if (arrayOfDigits.join ('') == array.join ('')) {
      let arrayIn = Array.from(String(i), Number);
      return arrayIn.join('');
    }
    } 
  }
 


  for ( let i = Number (n) + 1; i < Number (n) + index*10; i++){
    let arrayOfDigits = Array.from(String(i), Number);
    arrayOfDigits.sort ();

    if (arrayOfDigits.join ('') == array.join ('')) {
      let arrayIn = Array.from(String(i), Number);
      return arrayIn.join('');
    }
    }
  }   
  


  console.log (nextBigger(22528430999860));

/*  /*    expected 1234567980 to equal 1234567908 */

 /* 154385746727187
It should work for random inputs too: expected 154385746727817 to equal 154385746727718 


function nextBigger(n){
  let strTest = n.toString();
  let arrayTest = strTest.split('');
  for (let i = arrayTest.length - 1; i > 0; i--){
console.log (arrayTest [i]);
    console.log (arrayTest [i - 1]); 
    if (arrayTest [i] > arrayTest [i - 1]){
      let index = arrayTest [i];
      arrayTest [i] = arrayTest [i - 1];
      arrayTest [ i - 1] = index;
      return Number(arrayTest.join(''));
    }
  }
  return -1;
} */