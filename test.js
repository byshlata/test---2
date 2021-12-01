function factorial(n){
    let str = '';
    str = n;
    let resalt = 1;
    while (n) {
        resalt *=n--;

    }    

console.log (resalt.toFixed(20));

return (String(resalt.toFixed()));
  }


console.log(factorial(175));