
// PARAGRAPHS
let p1 = document.getElementById("paragraph1")
let p2 = document.getElementById("paragraph2")
let p3 = document.getElementById("paragraph3")

// IMAGE
let image = document.getElementById("storyImage")

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
function setText(a, b, c){

// WRITE YOUR STORY TEXT HERE
p1.textContent = a
p2.textContent = b
p3.textContent = c


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

changeImage("./images/download.jpg")

showButtons([medicineButton, asianNoButton])

}


// MEDICINE PATH
function medicinePath(){

hideAllButtons()

setText('"Sometimes Timmy, you need to forge your own path."', "You've taken the medicine! Your friend is now on the road to recovery, but his morals are still in question. He is unsure if he should tell his parents that he had taken the medicine, or if he should keep it a secret. Again, he is completley unsure and weak willed, so he turn to you again. What do you tell him to do do?")

changeImage("./images/meds.png")

showButtons([braincellQuestButton, parentsDisapproveButton])

}


// BRAINCELL QUEST
function braincellQuest(){

hideAllButtons()

setText("You tell him everything is going to be fine. He needed to take the medicine, and if he didn't, he would have been in a lot more pain. After a couple miles down the road, you see an extremely hot lady in distress. You pull over to ask her if she needs help, and she asks your for some help. Do you help her or not?")

changeImage("./images/distress_lady.png")

showButtons([helpHerButton, leaveHerButton])

}


// HELP HER
function helpHer(){

hideAllButtons()

setText('"Of course! Anything you need!" (as your friend shoots you a look)', "You decide to help the hot lady. After helping her, you find out that she was cosplaying as a homeless person, and was actually a very wealthy woman. She bestows upon you a braincell, which you then shove down your friend's throat, which gives him the ability to make his own decisions. He thanks you for your help, and you both live happily ever after.")

changeImage("./images/braincell.png")

showButtons([restartButton])

}


// LEAVE HER
function leaveHer(){

hideAllButtons()

setText('"Get away from me, skank!"', "You rudely refuse to help her and drive off into the distance. After a couple miles, your rear tire pops and you get out of the car to change it. Just then, you hear a scream from your friend. You look up and hear him gargle blood, look at you in fear, and die. You have only a second to react, as the pretty lady-turned-scary-hag jumps out from behind the car and shoves a knife in your throat.", '"Shoulda helped me, brat!"')

changeImage("./images/death_lady.png")

showButtons([restartButton])

}


// PARENTS DISAPPROVE
function parentsDisapprove(){

hideAllButtons()

setText('"Mom, Dad, I am a homo-I made him do it!"', "Your friend tells his parents that you made him take the medicine. They are completley against him going to the doctor, and banish him from the familiy. They tell you the only apology they will accept is if he takes the disease back into his body and lets natural selection run its course. He can't decide and it is your decision yet again. What do you decide?")

changeImage("./images/sad.png")

showButtons([runParentsButton, obeyParentsButton])

}


// RUN FROM PARENTS
function runParents(){

hideAllButtons()

setText("You tell him it was the only way for you to survive, and your parents are in the complete wrong. He believes you, and you tell him to put it all behind him, and focus on the future. He is reassured, and now you guys start your adventure to find him some competence!")

changeImage("./images/happy.png")

showButtons([braincellQuestButton])

}


// OBEY PARENTS
function obeyParents(){

hideAllButtons()

setText("You tell him to obey his parents and hope to reconcile. You trust in his immune system, and he takes the medicine. After he takes the disease, you know wait in discomfort for several days. After a week, you call him. Nothing. You drive over, frantic, and bang on the door. He opens the door, and you hug him in relief. He then just spontaneously dies.", '"I guess I should not have listened to his parents..."')

showButtons([restartButton])

}


// ASIAN NO PATH
function asianNoPath(){

hideAllButtons()

setText("You tell him to go with his heart. He chooses to side with his parents, as they probably know what's best for him, and it is not worth the hassle anyway. You dissagree secretly, however you do not want to intrude on personal boundries nor disrupt his family for no reason. You have a vial of the medicine, and could stick him if you so choose. What do you do?")

changeImage("./images/meds.png")

showButtons([secretStickButton, sideDecisionButton])

}


// SECRETLY STICK HIM
function secretStick(){

hideAllButtons()

setText('"What they do not know will not hurt them"', "You and your friend sneak off somewhere and take the medicine. He almost immediatly improves in condition and feels much better. He is a little unsure, but after some encouraging words from you, he puts the whole situation behind him and begins the journey with you to find the braincell he so desperately needs.")

showButtons([braincellQuestButton])

}


// SIDE WITH DECISION
function sideDecision(){

hideAllButtons()

setText("You tell him to not take the medicine, and tough it out, as it probably will not develop into anything dangerous anyway.", "The next day, you recieve news that he developed Lukemia and a brain eating cancer. He does not live to see the next hour.")

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
