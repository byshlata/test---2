/* function permute(permutation) {
     var length = permutation.length,
         result = [permutation.slice()],
         c = new Array(length).fill(0),
         i = 1, k, p;
   
     while (i < length) {
       if (c[i] < i) {
         k = i % 2 && c[i];
         p = permutation[i];
         permutation[i] = permutation[k];
         permutation[k] = p;
         ++c[i];
         i = 1;
         result.push(permutation.slice());
       } else {
         c[i] = 0;
         ++i;
       }
     }
     return result;
   }
   
   console.log(permute([1, 8, 7, 6, 6, 4, 4, 3, 1, 1]));
    */

   function countdown(m, n){
    if (n < 1) {
    return [];
  } else {
    const number = 2 * m +1;
    n--;
    const countArray = countdown(number,n);
    countArray.push(number);
    return countArray;
  }
}
function countup(m, n){
  if (n < 1) {
  return [];
} else {
  const number = 3 * m +1;
  n--;
  const countArray = countdown(number,n);
  countArray.push(number);
  return countArray;
}
}

function countUp(array, n){
  if (n < 1) {
  return [];
} else {
  const number = 3 * array[n-1] + 1;
  n--;
  const countArrayTwo = countUp(array, n);
  countArrayTwo.push(number);
  return countArrayTwo;
}
}

function countDown(array, n){
  if (n < 1) {
  return [];
} else {
  const number = 2 * array[n-1] + 1;
  n--;
  const countArrayTwo = countDown(array, n);
  countArrayTwo.push(number);
  return countArrayTwo;
}
}
/* countdown(1, 10);
countup(1, 10);
console.log (countUp(countdown(1, 10), 10));
console.log (countDown(countup(1, 10), 10)); */
const array1 = countdown(1, 10);
const array2 = countup(1, 10);
const array3 = countUp(countdown(1, 10), 10);
const array4 = countUp(countup(1, 10), 10);
const array5 = countDown(countdown(1, 10), 10);
const array6 = countDown(countup(1, 10), 10);

const array7 = array1.concat(array2);
const array8 = array3.concat(array4);
const array9 = array5.concat(array6);

const array10 = array7.concat(array8);
const array11 = array9.concat(array10);

console.log (array11);

/* function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum){
    const array = rangeOfNumbers(startNum + 1, endNum);
    array.unshift(startNum);
    return array;
  } else {
    return [];
  }
  
} */

