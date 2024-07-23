// function to find average 



function avr(array) {
    let sum = 0;    
    for (let i = 1; i < array.length; i++) {
        sum += array[i]
    }
   let average = sum / array.length
   return average.toFixed(3)
}


console.log(avr[1,2,4])
