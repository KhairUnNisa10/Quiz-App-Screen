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
		question: "Q1: python is a:",
		a: "high level programming language",
		b: "assembly language",
		c: "low level programming language",
		ans: "ans1"
	},
	{
		question: "Q2: Who invented python:",
		a: "Guido van Rossum",
		b: "James gosling",
		c: "Rasmus lerdorf",
		ans: "ans1"
	},
	{
		question: "Q3: Which one is illegal variable name:",
		a: "MYVAR",
		b: "MY_var",
		c: "my var",
		ans: "ans3"
	},
	{
		question: "Q4: python code is run by: ",
		a: "compiler",
		b: "interpreter",
		c: "none of the above",
		ans: "ans2"
	},
	{
		question: "Q5: Can we use the “else” clause for loops",
		a: "yes",
		b: "no",
		c: "rarely",
		ans: "ans1"
	},
	{
		question: "Q6:  What is the output of the following code? \nstr = 'pynative' \nprint (str[1:3])",
		a: "py",
		b: "pyn",
		c: "yn",
		ans: "ans3"
	},
	{
		question: "Q7:  What is the output of the following code? \nvalueOne = 5 ** 2\n valueTwo = 5 ** 3\n print(valueOne)\nprint(valueTwo)",
		a: "10 15",
		b: "25 125",
		c: "Error: invalid syntax",
		ans: "ans2"
	},
	{
		question: "Q8: What is the output of the following code?\n var1 = 1\n var2 = 2\n var3 = '3'\n print(var1 + var2 + var3)",
		a: "6",
		b: "123",
		c: "Error. Mixing operators between numbers and strings are not supported",
		ans: "ans3"
	},
	{
		question: "Q9: What is the Output of the following code?\n for x in range(0.5, 5.5, 0.5):\n print(x)",
		a: "[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5]",
		b: "[0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]",
		c: "The Program executed with errors",
		ans: "ans2"
	},
	{
		question: "Q10: What is the output of the following code? \nfor i in range(10, 15, 1):\n print( i, end=', ')",
		a: "10, 11, 12, 13, 14",
		b: "10, 11, 12, 13, 14, 15",
		c: "10,12,14",
		ans: "ans1"
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
