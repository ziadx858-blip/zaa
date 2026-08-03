// ===============================
// Google Sheets URL
// ===============================

const scriptURL = "https://script.google.com/macros/s/AKfycbzB7fB1tV19uhe5HZNT9NjcXAu0qYlEyPrBoaRoBuOPj92p2jfegwsFhKswW3G-zQIm6A/exec";

const questions = document.querySelectorAll(".question");
const progress = document.getElementById("progressBar");

let current = 0;

showQuestion(current);

// ===============================
// Show Question
// ===============================

function showQuestion(index){

    questions.forEach(q=>q.classList.remove("active"));

    questions[index].classList.add("active");

    progress.style.width=((index+1)/questions.length)*100+"%";

}

// ===============================
// Next Question
// ===============================

function nextQuestion(){

    if(current<questions.length-1){

        current++;

        showQuestion(current);

    }

}

// ===============================
// NO Button
// ===============================

const noBtn=document.getElementById("noBtn");

function moveNo(){

    const maxX=window.innerWidth-noBtn.offsetWidth-20;

    const maxY=window.innerHeight-noBtn.offsetHeight-20;

    noBtn.style.position="fixed";

    noBtn.style.left=Math.random()*maxX+"px";

    noBtn.style.top=Math.random()*maxY+"px";

}

noBtn.addEventListener("mouseover",moveNo);

noBtn.addEventListener("touchstart",function(e){

e.preventDefault();

moveNo();

});

// ===============================
// Submit
// ===============================

document.getElementById("quizForm").addEventListener("submit",async function(e){

e.preventDefault();

let hobbies=[];

document.querySelectorAll('input[type="checkbox"]:checked').forEach(item=>{

hobbies.push(item.value);

});

const data={

name:document.getElementById("name").value,

age:document.getElementById("age").value,

hobby:hobbies.join(", "),

date:document.getElementById("date").value,

time:document.getElementById("time").value,

place:document.getElementById("place").value,

message:document.getElementById("message").value

};

try{

await fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

});

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

document.body.innerHTML=`

<div class="container">

<h1>❤️ Thanks Ya Moza ❤️</h1>

<h2>You made my day 🥹❤️</h2>

<p style="margin-top:20px;font-size:20px;">

Can't wait to see you ❤️

</p>

<br>

<audio controls autoplay>

<source src="music.mp3" type="audio/mpeg">

</audio>

<br><br>

<div style="font-size:45px;">

❤️ 💖 💕 💗 💝

</div>

</div>

`;

},800);

}catch(error){

alert("Error sending data!");

console.log(error);

}

});
