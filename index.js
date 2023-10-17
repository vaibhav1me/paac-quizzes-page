const displayQuestions = () => {
    document.getElementById("questions").innerHTML = ""
    let numberOfQuestions = Number(document.getElementById("numberOfQuestions").value);
    for (let i = 0; i < numberOfQuestions; i++) {
        document.getElementById("questions").innerHTML += `<div class="question">
                <input type="text" id="afk" placeholder="Enter question id">
                <button onclick="displayQuestion(event)">Confirm</button>
                <img src="" alt="">
                <button onclick="markQuestion()">Done</button>
            </div>`
    }
}

const displayQuestion = (e) => {
    let questionId = e.target.parentElement.getElementsByTagName('input')[0].value;
    // console.log(questionId)
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
    e.target.parentElement.getElementsByTagName('img')[0].src = `/questions/${difficulty}/${questionId}.jpg`;
}