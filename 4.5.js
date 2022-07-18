/***
 * renvoie la distance entre 2 point A et B ,  les deux étant un tableau de 2 éléments.
 ***/
 function calculDistance(A, B)
 {
     let X = [B[0] - A[0], B[1] - A[1]]; 
     return Math.sqrt(X[0] * X[0] + X[1] * X[1]); 
 }
 console.log(calculDistance([4, 1], [1, 1]));