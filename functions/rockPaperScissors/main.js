const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if(["rock", "paper", "scissors"].includes(userInput)) {return userInput} else {return "Not Correct"}
  }
  
  const getComputerChoice = function() {
    randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
      case 0:
      return "rock"
  
      case 1:
      return "paper"
  
      case 2:
      return "scissors"
    }
  
  }

  const determineWinner = function(userInput, computerInput) {
    let userInputProcessed = getUserChoice(userInput)
    if (userInputProcessed == "Invalid Input") {return "Invalid Input"}
    if (userInputProcessed == "bomb") {return "User won automatically."}
    if (userInputProcessed == computerInput) {return "Tie"} // Tie

    // Anything but tie
    if (userInputProcessed == "rock" && computerInput == "scissors"){return "User destroyed computer's scissors with his rock"} 
    else if (userInputProcessed == "scissors" && computerInput == "rock") {return "Computer destroyed user's scissors with his rock"}
    else if (userInputProcessed == "scissors" && computerInput == "paper"){return "User cut the paper of the computer"}
    else if (userInputProcessed == "paper" && computerInput == "scissors") {return "Computer cut the paper of the user"}
    else if (userInputProcessed == "paper" && computerInput == "rock") {return "User covered computer's rock with paper"}
    else if (userInputProcessed == "rock" && computerInput == "paper") {return "Computer covered the rock of the user with paper"}
  }
  
  const playGame = function(userInput) {
    const userInputData = getUserChoice(userInput);
    const computerInputData = getComputerChoice();
    console.log(determineWinner(userInputData, computerInputData))
  }
  
playGame("rocl")