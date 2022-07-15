/***
 * Retourne a nbr aléartoire entre 1 et 10.
 ***/
 function rand10()
 {
     return Math.floor(Math.random() * 10) + 1;
 }
 /***
  * Retourne un tableau de n éléments où chaque élément est un nombre aléatoire entre 1 et 10.
  ***/
 function multiRand(n)
 {
     let r = [];
     for(let i = 0; i < n; i++)
     {
         r.push(rand10());
     }
     return r;
 }
 let N = prompt('Combien de nbr souhaitez vous générer ?');
 console.log(multiRand(N));