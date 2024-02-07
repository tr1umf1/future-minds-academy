const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".quit");
const start_quiz = document.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
var timer = document.querySelector(".timer_sec");
var timer_left = document.querySelector(".time_left_txt");
var total_que = document.querySelector(".total_que");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = document.querySelector(".result_box .buttons .restart");
const quit_quiz = document.querySelector(".result_box .buttons .quit");
let counter = 0;
let userScore = 0;


start_btn.addEventListener('click', (event) => {
    info_box.classList.add("activeInfo");
})

exit_btn.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
})

start_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(counter);
    startTimer(15);
})

next_btn.addEventListener('click', (event) => {
    if (counter < questions.length - 1) {
        counter++;
        startTimer(15);
        showQuestion(counter);
        clearInterval(timer);
        resetOptions();
    } else {
        showResult();
    }
})


function showQuestion(index) {
    let que_text = document.querySelector(".que_text");
    let option_list = document.querySelector(".option_list");

    que_text.innerHTML = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";

    let hold_options = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        hold_options += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    option_list.innerHTML = hold_options;
    total_que.textContent = index + 1 + " of 5 questions";

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener('click', () => {
            clearInterval(timer);
            checkAnswer(option);
        });
    });

}

function startTimer(count) {
    var counter = setInterval(countDown, 1000);
    function countDown() {
        if (count < 10) {
            timer.textContent = "0" + count;
        } else { timer.textContent = count; }

        if (count == 0) {
            clearInterval(counter);
            timer_left.innerHTML = "Time experied";
        }
        count--;
    }
}

function checkAnswer(option) {
    const userAnswer = option.querySelector("span").innerText;
    const correctAnswer = questions[counter].answer;

    if (userAnswer === correctAnswer) {
        option.classList.add("correct");
        userScore++;
    } else {
        option.classList.add("incorrect");
    }

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add("disabled")
    });
    next_btn.classList.add("show");
}

function resetOptions() {
    const options = document.querySelectorAll(".options");
    options.forEach(option => {
        option.classList.remove("correct", "incorrect", "disabled");
    });

    next_btn.classList.remove("show");
}

function showResult() {
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");

    const scoreText = document.querySelector(".result_box .score_text");
    scoreText.innerHTML = `<span> You scored ${userScore} questions of the ${questions.length} questions!</span>`;
}

restart_quiz.addEventListener('click', () => {
    counter = 0;
    userScore = 0;
    result_box.classList.remove("activeResult");
    quiz_box.classList.add("activeQuiz");
    showQuestion(counter);
    startTimer(15);
    resetOptions();
});

quit_quiz.addEventListener('click', () => {
    counter = 0;
    userScore = 0;
    result_box.classList.remove("activeResult");
    info_box.classList.add("activeInfo");
})

