// This is a file for new features to be later implemented to the library source code

/* function quadraticFormula(a,b,c) {
   let discriminant = b**2 + 4 * a * c;

   if (discriminant === 0 || discriminant < 0) {
      return "No real roots!";
      
   } else {
   let resultA = -1 * b + Math.sqrt(discriminant) / 2*a;
   let resultB = -1 * b - Math.sqrt(discriminant) / 2*a;

   return resultA + " or " + resultB;
   }
}

console.log(quadraticFormula(3,5,6));
console.log(quadraticFormula(2,3,5));
console.log(quadraticFormula(0,0,0));
console.log(quadraticFormula(7,8,2)); */

// Features added so far counter: 1


function rand(min, max) {
   let range = max - min + 1;
   let genratedMumber = Math.floor(Math.random() * range) + min;
      return genratedMumber; 
}

console.log(rand(2,10))




