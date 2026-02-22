const theme = localStorage.getItem("theme");
if (theme) document.body.classList.add(theme);

let score = 0;
let correct = 0;
let timer = 0;
let interval;

const questions = [
  {
    passage: "Seni kriya adalah cabang seni rupa yang menekankan keterampilan tangan.",
    question: "Apa fokus utama seni kriya?",
    options: [
      "Teknologi digital",
      "Keterampilan tangan",
      "Efek suara",
      "Gerak tubuh"
    ],
    answer: 1
  }
];

function startTimer(){
  timer = 0;
  document.getElementById("timer").innerText = "Waktu: 0";
  interval = setInterval(()=>{
    timer++;
    document.getElementById("timer").innerText = "Waktu: " + timer;
  },1000);
}

function loadQuestion(){
  startTimer();
  const q = questions[0];
  document.getElementById("passage").innerText = q.passage;
  document.getElementById("question").innerText = q.question;

  const opt = document.getElementById("options");
  opt.innerHTML = "";

  q.options.forEach((o,i)=>{
    const btn = document.createElement("button");
    btn.innerText = o;
    btn.onclick = ()=>checkAnswer(i === q.answer);
    opt.appendChild(btn);
  });
}

function checkAnswer(correctAnswer){
  clearInterval(interval);
  if(correctAnswer){
    correct++;
    score += timer <= 180 ? 25 : 15;
  }

  localStorage.setItem("finalScore", score);
  location.href = "result.html";
}

loadQuestion();
