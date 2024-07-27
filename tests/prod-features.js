// This is a file for new features to be later implemented to the library source code

function quadraticFormula(a,b,c) {
   let discriminant = b**2 + 4 * a * c;
   let resultA = -1 * b + Math.sqrt(discriminant) / 2*a;
   let resultB = -1 * b - Math.sqrt(discriminant) / 2*a;

   return resultA + " or " + resultB;
}

console.log(quadraticFormula(3,5,6))