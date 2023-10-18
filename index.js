let completedQuestions = []

const displayQuestions = () => {
    document.getElementById("questions").innerHTML = ""
    let numberOfQuestions = Number(document.getElementById("numberOfQuestions").value);
    let width = '45%';
    let imageHeight = '30rem'
    if(numberOfQuestions>4){
     imageHeight = '7rem'
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
                </div>
                <img style="height:${imageHeight};" src="" alt="No question selected. Enter question id to display question">
                <button onclick="markQuestion(event)">Done</button>
            </div>`
        
    }
}

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
    let difficulty = ""
    if(questionId[0] == 'e'){
         difficulty = "easy"
    }
    else if (questionId[0] == 'm'){
         difficulty = "medium"
    }
    else {
         difficulty = "hard"
    }
    parent.getElementsByTagName('img')[0].src = `/questions/${difficulty}/${questionId}.jpg`;
    if(done == -1){
        parent.innerHTML += '<message>This question has already been attempted</message>'
        setTimeout(() => {
            parent.getElementsByTagName('message')[0].remove();
        }, 2000);
    }
    
}

const markQuestion = (e) => {
    let parent = e.target.parentElement
    let questionId = parent.getElementsByTagName('input')[0].value;
    if(questionId != ""){
    for (let i = 0; i < completedQuestions.length; i++) {
        if(completedQuestions[i] == questionId){
            return -1;
        }
    }
        completedQuestions.push(questionId)
        parent.innerHTML += '<message>This question is marked attempted</message>'
        setTimeout(() => {
           console.log(parent.getElementsByTagName('message')[0].remove())
        }, 3000);
    }
}
