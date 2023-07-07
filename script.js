let quizData = [
    {
        question: "1. Ajitnath Jain Temple, one of the holy Jain Tirthankaras, at Taranga Hill, is located in which state/UT?",
        options: ["Maharashtra", "Gujarat", "Bihar", " Uttar Pradesh"],
        answer: 1
    },
    {
        question: "2. India signed an ‘Audio-visual co-production treaty’ with which country?",
        options: ["USA", "Canada", "Australia", "UK"],
        answer: 2
    },
    {
        question: "3. Which Indian state/UT launched the ‘Mahila Nidhi’, loan scheme for social and economic development of women through loans?",
        options: ["Uttar Pradesh", "Rajasthan", "West Bengal", "Odisha"],
        answer: 1
    },
    {
        question: "4. In the field of Art forms, what is ‘Sattriya’, which was seen in the news recently?",
        options: ["Music", "Dance", "Painting", " Theatre Art"],
        answer: 1
    },
    {
        question: "5. Which international association launched ‘Door Se Namaste’ Doordarshan and YouTube series?",
        options: ["WEF", "UNICEF", "World Bank", " IMF"],
        answer: 1
    },
    {
        question: "6. Where was the ‘Thai Trade Expo’ held in India in 2022?",
        options: ["Mumbai", "Hyderabad", "Mysuru", "Varanasi"],
        answer: 1
    },
    {
        question: "7. Which institution launched the guidelines to identify mental health children in school going children?",
        options: ["NITI Aayog", "Union Health Ministry", " NCERT", "National Testing Agency"],
        answer: 2
    },
    {
        question: "8. Which institution has released draft notification on ‘Indian Nutrition Rating’?",
        options: ["NITI Aayog", "FSSAI", "NABARD", "FCI"],
        answer: 1
    },
    {
        question: "9. Which country has emerged as the top oil supplier to India in October?",
        options: ["Iraq", "Saudi Arabia", "Russia", " UAE"],
        answer: 2
    },
    {
        question: "10. India signed a deal on comprehensive migration and mobility partnership, with which country?",
        options: ["Australia", "Singapore", "Germany", "England"],
        answer: 2
    },
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById("categories").classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    loadQuestion();
}

function loadQuestion() {
    let questionElement = document.getElementById("question");
    let optionsElement = document.getElementById("options");
    let currentQuizData = quizData[currentQuestion];

    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        let radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "answer";
        radioBtn.id = "option" + index;
        radioBtn.value = index;

        let label = document.createElement("label");
        label.setAttribute("for", "option" + index);
        label.innerText = option;

        optionsElement.appendChild(radioBtn);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement("br"));
    });
}

function submitAnswer() {
    let selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        let answer = parseInt(selectedOption.value);
        if (answer === quizData[currentQuestion].answer) {
            score++;
        }

        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    let scoreElement = document.getElementById("score");
    scoreElement.innerText = `You scored ${score} out of ${quizData.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").classList.add("hide");
    document.getElementById("categories").classList.remove("hide");
}