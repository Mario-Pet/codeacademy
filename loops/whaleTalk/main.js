let input = "turpentine and turtles"
let vowels = ["a", "e", "i", "o", "u"]
let resultArray = [];
let inputArray = input.split("")

for (let i = 0; i < inputArray.length; i++) {
    for(var k = 0; k < vowels.length; k++) {
        if (inputArray[i] == vowels[k]) {
            if (inputArray[i] == "u") {
                resultArray.push("uu")
            } else if (inputArray[i] == "e") {
                resultArray.push("ee")
            } else {
                resultArray.push(inputArray[i])
            }
        }
    } 
} 
console.log(inputArray)
console.log(resultArray)
    



console.log(resultArray.join("").toUpperCase())

    
console.log("UUEEIEEAUUEE" == "UUEEIEEAUUEE")