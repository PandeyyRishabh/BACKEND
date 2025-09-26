let computer = []
for (let i = 0; i < 5; i++) {
  computer.push(Math.floor(Math.random() * 5) + 1)
}


let user = [1, 2, 3, 4, 5]

// Compare guesses
let correct = 0
for (let i = 0; i < computer.length; i++) {
  if (computer[i] === user[i]) {
    console.log("Right Guess at index " + i)
    correct++
  } else {
    console.log("Wrong Guess at index " + i)
  }
}

console.log("Total Correct: " + correct + " out of " + computer.length)
console.log("Computer's secret numbers : " + computer)
