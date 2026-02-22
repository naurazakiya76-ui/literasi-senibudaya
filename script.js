let currentIndex = 0;
let score = 0;
let answered = 0;
let timeLeft = 30;
let timerInterval;

const questions = [
{
passage:"Batik tulis dibuat menggunakan canting dan malam panas.",
question:"Nilai utama dalam membatik adalah...",
options:["Ketelitian","Kecepatan","Persaingan","Produksi massal"],
answer:0
},
{
passage:"Gerabah dibuat dari tanah liat yang dibakar.",
question:"Tujuan pembakaran gerabah adalah...",
options:["Mewarnai","Mengeraskan","Menghias","Mempercepat"],
answer:1
},
{
passage:"Anyaman bambu digunakan untuk membuat keranjang.",
question:"Keunggulan bambu adalah...",
options:["Mahal","Sulit dibentuk","Ramah lingkungan","Berat"],
answer:2
},
{
passage:"Ukiran kayu tradisional memiliki nilai filosofis.",
question:"Fungsi simbol dalam ukiran adalah...",
options:["Dekorasi biasa","Nilai filosofis","Agar mahal","Ekspor"],
answer:1
},
{
passage:"Tenun dibuat dengan menyilangkan benang.",
question:"Nilai yang dipelajari dari menenun adalah...",
options:["Kesabaran","Kekuatan","Kecepatan","Kompetisi"],
answer:0
}
];

function startQuiz(){
currentIndex=0;
score=0;
answered=0;
timeLeft=30;

document.getElementById("timer").textContent=timeLeft;

startTimer();
showQuestion();
}

function startTimer(){
timerInterval=setInterval(()=>{
timeLeft--;
document.getElementById("timer").textContent=timeLeft;

if(timeLeft<=0){
clearInterval(timerInterval);
finishQuiz();
}
},1000);
}

function showQuestion(){
if(currentIndex>=questions.length){
finishQuiz();
return;
}

const q=questions[currentIndex];

document.getElementById("passage").textContent=q.passage;
document.getElementById("question").textContent=q.question;

const optionsDiv=document.getElementById("options");
optionsDiv.innerHTML="";

q.options.forEach((option,i)=>{
const btn=document.createElement("button");
btn.textContent=option;
btn.onclick=()=>selectAnswer(i);
optionsDiv.appendChild(btn);
});

document.getElementById("progress").textContent=
"Soal dijawab: "+answered;
}

function selectAnswer(selected){
answered++;

if(selected===questions[currentIndex].answer){
score++;
}

currentIndex++;
showQuestion();
}

function finishQuiz(){
clearInterval(timerInterval);

document.querySelector(".container").innerHTML=`
<h2>Waktu Habis!</h2>
<p>Total dijawab: ${answered}</p>
<p>Jawaban benar: ${score}</p>
<p>Skor akhir: ${score} poin</p>
<button onclick="location.reload()">Main Lagi</button>
`;
}
