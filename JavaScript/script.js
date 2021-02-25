//Home Page
function greetings(){
	//1. Access input HTML element >>> Query Selector
	let fname = document.querySelector('#fname')
	console.log(fname);

	//2. Get Value of HTML input element
	let fValue = fname.value;
	console.log(fValue);

	//3. Access <h1> Element
	let greetings = document.querySelector('h1 > span');
	console.log(greetings);

	//4. Change content of <h1> element
	greetings.innerHTML = fValue;

	//Showing different buttons after Onclick
	let header = document.getElementById("header");
	var home = document.getElementById("home-btn");

	if (header.style.display === "none") {
		header.style.display = "block";
	} else {
		header.style.visibility = "hidden";
		header.style.display = "flex";
		home.style.display = "block";
		home.style.display = "flex";
	}
}

//JSON For Questions
const quizQues = [
	{
		question: "Q1: Who invented HTML?",
		a: "Tim Berners Lee",
		b: "Charles Babbage",
		c: "John Doe",
		d: "None of the Above",
		ans: "ans1"
	},
	{
		question: "Q2: What is the full form of HTML?",
		a: "Hyper Text Mark Language",
		b: "Hyper Text Markup Language",
		c: "Hyper Text Markup Languages",
		d: "None of the Above",
		ans: "ans2"
	},
	{
		question: "Q3: What is the full form of CSS?",
		a: "Cascading Style Sheet",
		b: "Cascading Styling Sheet",
		c: "Cascading Style Sheets",
		d: "None of the Above",
		ans: "ans3"
	}
];

//Applying Questions & Answers
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const answers = document.querySelectorAll('.ans');

//Score Board
let score = 0;
const showScore = document.querySelector('#score-container');


//Load Question
let quesCount = 0;

function loadQuestion(){
	const quesList = quizQues[quesCount];

	question.innerHTML = quesList.question;

	option1.innerHTML = quesList.a;
	option2.innerHTML = quesList.b;
	option3.innerHTML = quesList.c;
	option4.innerHTML = quesList.d;
}

loadQuestion();

//Checking the Correct answer
function getCheckAns(){
	let ans;
	answers.forEach((currAnsElem) => {
		if(currAnsElem.checked){
			ans = currAnsElem.id;
		}
	});

	return ans;
};

//Deselecting the default check
function deselect(){
	answers.forEach((currAnsElem) => currAnsElem.checked = false);
}

//Adding Functionality to the Submit Button
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
	const checkedAns = getCheckAns();
	console.log(checkedAns);

	if(checkedAns === quizQues[quesCount].ans){
		score++;
	};

	quesCount++;
	deselect();

	if(quesCount < quizQues.length){
		loadQuestion();
	}else{
		//Displaying the Scoreboard
		showScore.innerHTML = `
			<img src="icon.png" alt="Prize Icon" height="50px" />
			<h3>You scored ${score}/${quizQues.length}</h3>
			<button class="btn play" onclick="location.reload()">Play Again</button>
		`;

		showScore.classList.remove('score-area');
	}
});