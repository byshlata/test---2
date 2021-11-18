function doneOrNot(board){
  let sumRows = 0;
  let sumColumns = 0;
  for (let i = 0; i < 9; i++){
    for (let k = 0; k < 9; k++){
      sumRows += board[i][k];
    }
    if (sumRows != 45){
      return 'Try again!';
    }
    sumRows = 0;
  }

  for (let i = 0; i < 9; i++){
    for (let k = 0; k < 9; k++){
      sumColumns += board[k][i];
    }
    if (sumColumns != 45){
      return false;
    }
    sumColumns = 0;
  }


  if ((sumRegion(0, 0, board) == false) || (sumRegion(3, 0, board) == false) || (sumRegion(6, 0, board) == false) || (sumRegion(0, 3, board) == false) || (sumRegion(3, 3, board) == false) || (sumRegion(6, 3, board) == false) || (sumRegion(0, 6, board) == false) || (sumRegion(3, 6, board) == false) || (sumRegion(6, 6, board) == false)){
    return false;
  }


 return true;
}


function sumRegion(i, k, array){
  let sum = 0;
  let row = i + 3;
  let col = k + 3;
  for (i; i < row; i++){
    for (k; k < col; k++){
      sum += array [i][k];
    }
    k = k -3;
  }
  if (sum != 45){
    return false;
  }
  else {
    return true;
  }
}
    console.log (doneOrNot([[ 5, 3, 4, 6, 7, 8, 9, 1, 2 ],
                            [ 6, 7, 2, 1, 9, 5, 3, 4, 8 ],
                            [ 1, 9, 8, 3, 4, 2, 5, 6, 7 ],
                            [ 8, 5, 9, 7, 6, 1, 4, 2, 3 ],
                            [ 4, 2, 6, 8, 5, 3, 7, 9, 1 ],
                            [ 7, 1, 3, 9, 2, 4, 8, 5, 6 ],
                            [ 9, 6, 1, 5, 3, 7, 2, 8, 4 ],
                            [ 2, 8, 7, 4, 1, 9, 6, 3, 5 ],
                            [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ] ]));

