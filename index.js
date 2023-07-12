// Iteration 1: Names and Input
let hacker1 = "Andre"
console.log(`The drivers name is ${hacker1}`)

let hacker2 = "Silvio"
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

const charHacker2 = hacker2.length


if (hacker1.length < hacker2.length) {
    console.log(`The navigators has the longest name, it has ${charHacker2} characters.`)
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

let char = ""

for (let i = 0; i < hacker1.length; i++) {
    char+= hacker1[i].toUpperCase() + " ";
}
console.log(char);


// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".


let character = ""
for (let j = hacker2.length -1; j >= 0; j--) {
    character+= hacker2[j]
}
console.log(character);



// 3.3 Depending on the lexicographic order of the strings, print:


if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.")
}
    else if(hacker2.localeCompare(hacker1) === -1){
        console.log("Yo, the navigator goes first, definitely.")
    }
        else{
            console.log("What?! You both have the same name?")
        }





