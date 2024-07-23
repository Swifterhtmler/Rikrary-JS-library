// this is the core of the library

// function to check if number is even

 function isEv (n) {
    if (n % 2 == 0) {
        return true   
    } else {
        return false
    }
}



// function to find average 


Array.prototype.avr = function () {
    if (this.length === 0) {
       return console.log("Cannot calculate length of an empty array")
    } else {
    let sum = 0;    
    for (let i = 1; i < this.length; i++) {
        sum += this[i]
    }
   let average = sum / this.length
   return average.toFixed(3)
  }
}

// Bubble sort algorithm

Array.prototype.bsort = function() {

    for (var i = 0; i < this.length; i++) {

        for (var j = 0; j < (this.length - i - 1); j++) {

            if (this[j] > this[j + 1]) {
                var temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }

    return this;
}

// Quicksort algorithm

Array.prototype.qsort = function() {
    if (this.length <= 1) return this;

    let pivot = this[Math.floor(this.length / 2)];
    let left = this.filter(x => x < pivot);
    let right = this.filter(x => x > pivot);
    let equal = this.filter(x => x === pivot);

    return [...left.qsort(), ...equal, ...right.qsort()];
}

// reverse

String.prototype.rev = function () {
    return this.split('').reverse().join('');
}


module.exports = {
   isEv, 
   avr,
   bsort,
   qsort,
   rev
}