function gap(g, m, n) {
    let arrayPrimeNuber = [];
    let indexNumber;


let t = 0;

    if (n <= 500000){

    if ( (m % 2 == 0) && (m != 2)){
      t = m + 1;  
    } else {
        t = m;
    }        
        while (t <= n ){
{
    if (t % 3 != 0){
        if ((number (t) != false) && (number (t+g) != false)){
         indexNumber = 0;
        for (let k = number (t) + 1; k < (number (t) + g); k++){
            if ( number (k) != false){
                indexNumber = 1;
                break;
            }
        }
        if (indexNumber != 1){
         arrayPrimeNuber.push(t, t+g);
         return arrayPrimeNuber;    
        }
    }
           
    } 
     t +=2;  
}
    }
    }
  
    if (n >= 500000){
        
        if ( (n % 2 == 0) && (n != 2)){
          t = n - 1;  
        } else {
            t = n;
        }      
            while (t >= m ){
    {
        if (t % 3 != 0){
            if ((number (t) != false) && (number (t-g) != false)){
             indexNumber = 0;
             console.log (number (t-g));
             console.log (number (t)-1);
            for (let k = number (t-g); k < number (t+1); k++){
                if ( number (k) != false){
                    indexNumber = 1;
                    break;
                }
            }
            if (indexNumber != 1){
             arrayPrimeNuber.push(t, t-g);
             return arrayPrimeNuber;    
            }
        }
               
        } 
         t -=2;  
    }
        }
        }
   
       
    return null; 
}



function number (x) {
    if (x % 5 == 0){
        return false;
    }
    for (let k = 2; k < x; k++){
        if (x % k == 0){
           return false;
            }
        }
        return x;
}

    console.log (gap(2,1000037,1000039));

/*     1000037, 1000039 */