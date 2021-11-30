function connectFour(board) {
    let index = ['draw'];
    let indexR = 0;
    let indexY = 0;
  for (let i = 0; i < board.length; i++){
      
    for (let k =0 ; k < board[0].length; k++){
        if ((k < 4) && (board[i][k] == board[i][k+1]) && (board[i][k+2] == board[i][k+3]) && (board[i][k+1] == board[i][k+2]) && (board[i][k] != '-')){
            if (board[i][k] == 'R'){
                indexR++;
            } else {
                indexY++;
            }
        }
        if ((i < 3) && (board[i][k] == board[i+1][k]) && (board[i+2][k] == board[i+3][k]) && (board[i+1][k] == board[i+2][k]) && (board[i][k] != '-')){
            if (board[i][k] == 'R'){
                indexR++;
            } else {
                indexY++;
            }
        }

        if ((i < 3) && (k <4) && (board[i][k] == board[i+1][k+1]) && (board[i+2][k+2] == board[i+3][k+3]) && (board[i+1][k+1] == board[i+2][k+2]) && (board[i][k] != '-')){
            if (board[i][k] == 'R'){
                indexR++;
            } else {
                indexY++;
            }
        }

        if ((i < 3) && (k > 2) && (board[i][k] == board[i+1][k-1]) && (board[i+2][k-2] == board[i+3][k-3]) && (board[i+1][k-1] == board[i+2][k-2]) && (board[i][k] != '-')){
            if (board[i][k] == 'R'){
                indexR++;
            } else {
                indexY++;
            }
        }
        if (board[i][k] == '-'){
          index[0] = 'in progress';
      }
    }
  }
 if (indexY > indexR){
     return 'Y';
 } else {
     if (indexR > indexY){
         return 'R';
     } else {
         if (indexY == indexR){
             return 'draw';
         } else {
             return index[0];
         }
     }
 }
}


console.log(connectFour([['R','R','R','Y','-','-','-'],
                         ['R','R','Y','-','-','-','-'],
                         ['R','Y','-','-','-','-','-'],
                         ['Y','-','-','-','-','-','R'],
                         ['-','-','-','-','-','R','R'],
                         ['-','-','-','-','R','R','R']]));