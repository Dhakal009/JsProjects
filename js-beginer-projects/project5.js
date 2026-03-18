const prompt =  require("prompt-sync")()
const fs = require("fs")

function loadQuestion(){
    try{
        const data = fs.readFileSync("questions.json","utf8")
        const questions = JSON.parse(data).questions 
        return questions
    }
    catch(e){
        console.log("Error occured loading file", e)
        return [];
    }
}

function getRandomQuestions(questions,noOfQuestions){
    if(noOfQuestions > questions.length){
        noOfQuestions = questions.length
    }

    const shuffled = [...questions];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0,noOfQuestions)
}

function askQuestion(question){
    console.log(question.question)
    for(let i = 0; i< question.options.length; i++){
        const option  = question.options[i]
        console.log(`${i+1}.${option}`)
    }

    const choice = parseInt(prompt("enter the number: "))
    if(isNaN(choice) || choice < 1 || choice > question.options.length){
        console.log("Invalid Input..")
        return false
    }
    const choiceValue = question.options[choice-1]
    return choiceValue === question.answer


}
numOfQuestion = parseInt(prompt("enter the number of questions: "))
const questions = loadQuestion()
const randomQuestions = getRandomQuestions(questions,numOfQuestion)
let correct;
let n = 0;
let score = 0;
const startTime = Date.now()

while(n < numOfQuestion){
    console.log()
    correct = askQuestion(randomQuestions[n])
    if(correct){
        console.log("Correct Answer")
        score ++;
    }else{
        console.log("Incorrect Answer")
        break;
    }
    n++;
}
console.log()
console.log(`Your Total Score is: ${score}`)
const totalTime = Date.now() - startTime
console.log(`Total time taken: ${Math.round(totalTime/1000)}s`)
console.log("===========TRY AGAIN===========")


