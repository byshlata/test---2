function domainName(url){
let httpTest = /http/i;
let wwwTest = /www./i;
  if (httpTest.test(url) == true && wwwTest.test(url) == true ){
   let arrayDomainNameOff = url.split('//');
   let domainNameOff = arrayDomainNameOff[1].split(".");
   return domainNameOff[1];
  } else  if (httpTest.test(url) == true){
   let arrayDomainNameOff = url.split('//');
   let domainNameOff = arrayDomainNameOff[1].split(".");
   return domainNameOff[0];
  } else {
   let arrayDomainNameOff = url.split('.');
   return arrayDomainNameOff[1];
  }

}

  console.log (domainName("http://google.co.jp"));

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