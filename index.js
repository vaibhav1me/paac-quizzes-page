let completedQuestions = []

if(JSON.parse(localStorage.getItem("completedQuestions"))){
    completedQuestions = JSON.parse(localStorage.getItem("completedQuestions"));
}

const displayQuestions = () => {
    document.getElementById("questions").innerHTML = ""
    let numberOfQuestions = Number(document.getElementById("numberOfQuestions").value);
    let width = '45%';
    let imageHeight = ''
    
    if(numberOfQuestions>4){
     imageHeight = '8rem'
    }
    else if(numberOfQuestions>2){
        imageHeight = '15rem'
    }
    
    for (let i = 0; i < numberOfQuestions; i++) {
        if((numberOfQuestions%2 == 1 && i == numberOfQuestions-1) || numberOfQuestions==1){
            width = '92%';
        }
        document.getElementById("questions").innerHTML += `<div class="question" style="width:${width};">
                <div>
                    <input type="text" placeholder="Enter question id">
                    <button onclick="displayQuestion(event)">Confirm</button>
                    <button onclick="markQuestion(event)">Done</button>
                </div>
                <img src="" style="max-height: ${imageHeight}" alt="No question selected. Enter question id to display question">
                </div>`
            }
        }
        // style="height:${imageHeight};"
        // <div id="question_img";"></div>
const doneStatus = (questionId) => {
    for (let i = 0; i < completedQuestions.length; i++) {
        if(completedQuestions[i] == questionId){
            return -1;
        }
    }
    return 1
}


const displayQuestion = (e) => {
    let parent = e.target.parentElement.parentElement
    let questionId = parent.getElementsByTagName('input')[0].value;
    let done = doneStatus(questionId)
    parent.getElementsByTagName('img')[0].src = `/images/${questionId}.png`;

    // let difficulty = ""
    // if(questionId[0] == 'e' || questionId[0]=='E' ){
    //      difficulty = "easy"
    // }
    // else if (questionId[0] == ('m' || 'M')){
    //      difficulty = "medium"
    // }
    // else {
    //      difficulty = "hard"
    // }
    // console.log(questionId)
    // parent.getElementsByTagName('img')[0].src = `/questions/${difficulty}/${questionId}.jpg`;
    // parent.querySelector('#question_img').style.backgroundImage = `url("/questions/${difficulty}/${questionId}.jpg")`;
    // console.log(parent.querySelector('#question_img').style.backgroundImage)

    if(done == -1){
        parent.innerHTML += '<message>This question has already been attempted</message>'
        setTimeout(() => {
            parent.getElementsByTagName('message')[0].remove();
        }, 2000);
    }
}

const markQuestion = (e) => {
    let parent = e.target.parentElement.parentElement
    let questionId = parent.getElementsByTagName('input')[0].value;
    if(questionId != ""){
    for (let i = 0; i < completedQuestions.length; i++) {
        if(completedQuestions[i] == questionId){
            return -1;
        }
    }
        completedQuestions.push(questionId)
        localStorage.setItem("completedQuestions", JSON.stringify(completedQuestions))
        parent.innerHTML += '<message>This question is marked attempted</message>'
        setTimeout(() => {
           console.log(parent.getElementsByTagName('message')[0].remove())
        }, 3000);
    }
}
