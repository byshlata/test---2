function sumIntervals(intervals){
    
    intervals.sort(compare);
    console.log (intervals);
    for (let i = 0; i < intervals.length - 1; i++){
        if (intervals[i][0] == intervals[i+1][0] && intervals[i][1] == intervals[i+1][1]){
        intervals.splice (i+1, 1);
        i--;
    }
}
for (let i = 0; i < intervals.length - 1; i++){
    if (intervals[i][0] < intervals[i+1][0] && intervals[i][1] > intervals[i+1][1]){
        intervals.splice (i+1, 1);
        i--;
    } 
    } 

for (let i = 0; i < intervals.length - 1; i++){
    if (intervals[i][0] > intervals[i+1][0] && intervals[i][1] < intervals[i+1][1]){
        intervals[i][1] = intervals[i+1][1];
        intervals.splice (i+1, 1);
        i--;
    } 
    }    
  
    for (let i = 0; i < intervals.length - 1; i++){
        if (intervals[i][0] <= intervals[i+1][0] && intervals[i][1] >= intervals[i+1][0]){
            intervals[i][1] = intervals[i+1][1];
            intervals.splice (i+1, 1);
            i--;
        } 
        }   

        let summ = 0;
        for (let i = 0; i < intervals.length; i++){
            summ += intervals[i][1] - intervals[i][0];        
        } 

console.log (intervals);
    return summ;
}

function compare(a, b){
        if (a[0] == b[0]){
            return +a[1] - b[1];
        } else {
          return +a[0] - b[0];  
        }
      
    }


console.log(sumIntervals([ [ 2, 9 ], [ 2, 6 ], [ 2, 4 ], [ 2, 9 ], [ 2, 5 ] ]));