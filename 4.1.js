/***
 * Cette fonction affiche la surface du rectangle
 ***/
 function calcSurface(width, lenght)
 {
     return width * lenght;
 }
 let l = prompt('Length:');
 let w = prompt('Width:');
 console.log(calcSurface(w, l));