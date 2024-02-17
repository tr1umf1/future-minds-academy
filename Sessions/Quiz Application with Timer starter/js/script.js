const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".quit");
const start_quiz = document.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");
const timer = document.querySelector(".timer_sec"); // Changed to const
const timer_left = document.querySelector(".time_left_txt");
const total_que = document.querySelector(".total_que");
const option_list = document.querySelector(".option_list");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = document.querySelector(".result_box .buttons .restart");
const quit_quiz = document.querySelector(".result_box .buttons .quit");
let counter = 0;
let userScore = 0;
let countdownInterval; // Variable to hold the countdown interval

start_btn.addEventListener('click', (event) => {
    info_box.classList.add("activeInfo");
});

exit_btn.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
});

start_quiz.addEventListener('click', (event) => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestion(counter);
    startTimer(15);
});

next_btn.addEventListener('click', (event) => {
    if (counter < questions.length - 1) {
        counter++;
        clearInterval(countdownInterval); // Clear the previous countdown interval
        startTimer(15);
        showQuestion(counter);
        resetOptions();
    } else {
        showResult();
    }
});

function showQuestion(index) {
    let que_text = document.querySelector(".que_text");
    let option_list = document.querySelector(".option_list");

    que_text.innerHTML = "<span>" + questions[index].numb + "." + questions[index].question + "</span>";

    let hold_options = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        hold_options += `<div class="option"><span>${questions[index].options[i]}</span><i class="fas"></i></div>`;
    }

    option_list.innerHTML = hold_options;
    total_que.textContent = index + 1 + " of 5 questions";

    const options = document.querySelectorAll(".option");
    options.forEach(option => {
        option.addEventListener('click', () => {
            clearInterval(countdownInterval); // Clear the countdown interval on option click
            checkAnswer(option);
        });
    });
}


function startTimer(count) {
    let countValue = count; // Declare countValue to hold the countdown value
    countdownInterval = setInterval(countDown, 1000);
    function countDown() {
        if (countValue < 10) {
            timer.textContent = "0" + countValue;
        } else { timer.textContent = countValue; }

        if (countValue == 0) {
            clearInterval(countdownInterval); // Clear the countdown interval on reaching 0
            timer_left.innerHTML = "Time expired";
        }
        countValue--;
    }
}

function checkAnswer(option) {
    const userAnswer = option.querySelector("span").innerText;
    const correctAnswer = questions[counter].answer;

    clearInterval(countdownInterval); // Clear the countdown interval on option click

    if (userAnswer === correctAnswer) {
        option.classList.add("correct");
        option.querySelector("i").classList.add("fa-check-circle"); // Add icon for correct answer
        userScore++;
    } else {
        option.classList.add("incorrect");
        option.querySelector("i").classList.add("fa-times-circle"); // Add icon for incorrect answer

        // Highlight the correct answer
        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            if (opt.querySelector("span").innerText === correctAnswer) {
                opt.classList.add("correct");
                opt.querySelector("i").classList.add("fa-check-circle");
            }
        });
    }

    // Disable all options and show the next button
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
    window.location.reload();
});
