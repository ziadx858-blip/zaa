const scriptURL =
"https://script.google.com/macros/s/AKfycbzB7fB1tV19uhe5HZNT9NjcXAu0qYlEyPrBoaRoBuOPj92p2jfegwsFhKswW3G-zQIm6A/exec";

const form=document.getElementById("quizForm");

const audioInput=document.getElementById("audio");

const player=document.getElementById("player");

audioInput.addEventListener("change",function(){

const file=this.files[0];

if(file){

player.src=URL.createObjectURL(file);

}

});

form.addEventListener("submit",async function(e){

e.preventDefault();

const data={

name:document.getElementById("name").value,

age:document.getElementById("age").value,

hobby:document.getElementById("hobby").value,

message:document.getElementById("message").value,

date:new Date().toLocaleString()

};

try{

await fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

});

document.body.innerHTML=`

<div class="thanks">

Thanks ya moza ❤️

</div>

`;

}catch(err){

alert("Something went wrong!");

console.log(err);

}

});
