
// PARAGRAPHS
let p1 = document.getElementById("paragraph1")

// IMAGE
let image = document.getElementById("story-image")

// BUTTONS
let startButton = document.getElementById("startButton")

let medicineButton = document.getElementById("medicineButton")
let asianNoButton = document.getElementById("asianNoButton")

let braincellQuestButton = document.getElementById("braincellQuestButton")
let parentsDisapproveButton = document.getElementById("parentsDisapproveButton")

let helpHerButton = document.getElementById("helpHerButton")
let leaveHerButton = document.getElementById("leaveHerButton")

let runParentsButton = document.getElementById("runParentsButton")
let obeyParentsButton = document.getElementById("obeyParentsButton")

let secretStickButton = document.getElementById("secretStickButton")
let sideDecisionButton = document.getElementById("sideDecisionButton")

let restartButton = document.getElementById("restartButton")


// STORE ALL BUTTONS
let allButtons = [
startButton,
medicineButton,
asianNoButton,
braincellQuestButton,
parentsDisapproveButton,
helpHerButton,
leaveHerButton,
runParentsButton,
obeyParentsButton,
secretStickButton,
sideDecisionButton,
restartButton
]


// Hide all buttons
function hideAllButtons(){

for(let i = 0; i < allButtons.length; i++){
allButtons[i].style.display = "none"
}

}


// Show only the buttons you want
function showButtons(buttonArray){

for(let i = 0; i < buttonArray.length; i++){
buttonArray[i].style.display = "inline"
}

}


// Change story text
function setText(a){

// WRITE YOUR STORY TEXT HERE
p1.textContent = a

}


// Change image
function changeImage(file){

// Replace image file for each scene
image.src = file

}


// START STORY
function startStory(){

hideAllButtons()

setText("You have begun your journey! I admire your courage. Not many are brave enoguh to deal with the stupid friend of mine. The thing is, you suddenly discover that he has spotaneously developed E Coli, of which he has no idea how he got it. He expects that it has to do with the Wake Tech Community College school computers, but he isn't completely sure. He is in a lot of pain, and needs some medicine, but he is Asian, and his parents will not allow him to see a doctor for the medicine. He is unsure, and turns to you for help. What do you do?")

showButtons([medicineButton, asianNoButton])

}


// MEDICINE PATH
function medicinePath(){

hideAllButtons()

setText("You've taken the medicine! Your friend is now on the road to recovery, but his morals are still in question. He is unsure if he should tell his parents that he had taken the medicine, or if he should keep it a secret. Again, he is completley unsure and weak willed, so he turn to you again. What do you tell him to do do?")

showButtons([braincellQuestButton, parentsDisapproveButton])

}


// BRAINCELL QUEST
function braincellQuest(){

hideAllButtons()

setText("You tell him everything is going to be fine. He needed to take the medicine")

showButtons([helpHerButton, leaveHerButton])

}


// HELP HER
function helpHer(){

hideAllButtons()

setText("")

showButtons([restartButton])

}


// LEAVE HER
function leaveHer(){

hideAllButtons()

setText("")

showButtons([restartButton])

}


// PARENTS DISAPPROVE
function parentsDisapprove(){

hideAllButtons()

setText("")

showButtons([runParentsButton, obeyParentsButton])

}


// RUN FROM PARENTS
function runParents(){

hideAllButtons()

setText("")

showButtons([braincellQuestButton])

}


// OBEY PARENTS
function obeyParents(){

hideAllButtons()

setText("")

showButtons([restartButton])

}


// ASIAN NO PATH
function asianNoPath(){

hideAllButtons()

setText("")

showButtons([secretStickButton, sideDecisionButton])

}


// SECRETLY STICK HIM
function secretStick(){

hideAllButtons()

setText("")

showButtons([braincellQuestButton])

}


// SIDE WITH DECISION
function sideDecision(){

hideAllButtons()

setText("")

showButtons([restartButton])

}


// RESTART
function restart(){

location.reload()

}


// EVENT LISTENERS

startButton.addEventListener("click", startStory)

medicineButton.addEventListener("click", medicinePath)
asianNoButton.addEventListener("click", asianNoPath)

braincellQuestButton.addEventListener("click", braincellQuest)
parentsDisapproveButton.addEventListener("click", parentsDisapprove)

helpHerButton.addEventListener("click", helpHer)
leaveHerButton.addEventListener("click", leaveHer)

runParentsButton.addEventListener("click", runParents)
obeyParentsButton.addEventListener("click", obeyParents)

secretStickButton.addEventListener("click", secretStick)
sideDecisionButton.addEventListener("click", sideDecision)

restartButton.addEventListener("click", restart)


// Start with only Start button visible
hideAllButtons()
startButton.style.display = "inline"
