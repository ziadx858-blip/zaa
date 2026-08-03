const questions = document.querySelectorAll(".question");
const progress = document.getElementById("progressBar");

let current = 0;

showQuestion(current);

function showQuestion(index){

    questions.forEach(q => q.classList.remove("active"));

    questions[index].classList.add("active");

    progress.style.width = ((index + 1) / questions.length) * 100 + "%";

}

function nextQuestion(){

    if(current < questions.length - 1){

        current++;

        showQuestion(current);

    }

}

// زر No يهرب

const noBtn = document.getElementById("noBtn");

function moveNoButton(){

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

}

noBtn.addEventListener("mouseover", moveNoButton);

noBtn.addEventListener("touchstart", function(e){

    e.preventDefault();

    moveNoButton();

});

// تشغيل الأغنية

function playMusic(){

    document.getElementById("song").play();

}

// Submit

function submitAnswers(){

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const place = document.getElementById("place").value;
    const message = document.getElementById("message").value;

    const hobbies = [];

    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item=>{

        hobbies.push(item.value);

    });

    console.log({

        name,
        age,
        hobbies,
        date,
        time,
        place,
        message

    });

    // احتفال 🎉

    confetti({

        particleCount:250,
        spread:180,
        origin:{y:0.6}

    });

    setTimeout(function(){

        document.body.innerHTML = `

        <div class="container">

        <h1>❤️ Thanks Ya Moza ❤️</h1>

        <h2>You made my day 🥹❤️</h2>

        <p style="margin-top:20px;font-size:20px;">
        Can't wait to see you ❤️
        </p>

        <div style="font-size:45px;margin-top:25px;">
        ❤️ 💖 💕 💗 💝
        </div>

        </div>

        `;

    },800);

}