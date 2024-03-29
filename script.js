//in JS, every element is a node but not every node is an element

//getElementById()
// const historyList = document.getElementById("history-list");
// const historyListItems = historyList.getElementById('item');
// historyList.innerHTML = "<li>History Item</li>";

//querySelector()
// const headingNode = document.querySelector("h1");
// headingNode.innerHTML = "new heading";

const historyNode = document.getElementById("history-list");

const inputNode = document.querySelector("#guess-input");

// inputNode.value = "20";

//generates random number btwn 0 and 1
const correctNumber = Math.floor(Math.random() *100);
inputNode.value = correctNumber;

function checkAnswer(){

  //get the guess input & check against the correct answer
  //if guess user is blank, ask user for input & return
  //tell the user the resullt
  //store the result to be printed in guest history
  const guessInput = inputNode.value;
}