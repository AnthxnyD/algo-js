/***
  * Retourne un tableau de n éléments aléatoires contenus dans l'entrée Ar.
  * n ne peut pas être supérieur ou égal au nombre d'éléments que le tableau contient ni être 0.
  ***/
 function pickLearner(inputAr, n)
 {
     if(n > 0 && n < inputAr.length)
     {
         let i = 0, r = [];
         while(i < n)
         {
             r.push(inputAr[Math.floor(Math.random() * inputAr.length)]);
             i++;
         }
         return r;
     }
     console.error('');
 }
 let learner = [
     "Baudson Guillaume",
     "Benaccetta Rinaldo",
     "Blaevoet Benoit",
     "Brigode Xavier",
     "Charles Xavier",
     "Corda Daniela",
     "Denis Anthony",
     "Devilers Vincent",
     "Elinckx Julien",
     "Elyahyioui Selim",
     "Friquet Luca",
     "Gillard Sophie",
     "Kirac Axel",
     "Maddouri Hazem",
     "Maurcot Dylan",
     "Moussiaux Titouan",
     "Moraes Kamilla",
     "Pécher Stéphanie",
     "Scourneau Julien",
     "Vanvolcksom Doriano",
     "Vervoot Eddy"
 ];
 console.log(pickLearner(learner, 7));