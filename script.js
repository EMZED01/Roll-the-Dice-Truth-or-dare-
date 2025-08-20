const truths = [
  "What's your favorite memory of us?",
  "What’s one thing you’ve never told me?",
  "When did you first realize you liked me?",
  "What’s your biggest dream for us?",
];

const dares = [
  "Send me a cute selfie right now 😏",
  "Say 'I love you' in the funniest voice you can.",
  "Pretend to rap about me for 10 seconds.",
  "Blow me a kiss through the camera 💋",
];

const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const question = document.getElementById("question");
const card = document.getElementById("card");
const label = document.getElementById("label");
const historyList = document.getElementById("historyList");
const themeSwitch = document.getElementById("themeSwitch");

let history = [];

// Dice roll sound
const diceSound = new Audio("https://www.soundjay.com/misc/sounds/dice-roll-1.mp3");

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function flashBackground() {
  const colors = ["#f8bbd0", "#ffe0b2", "#dcedc8", "#bbdefb", "#f3e5f5"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = random;
  setTimeout(() => {
    document.body.style.background = document.body.classList.contains("dark") ? "#121212" : "#fce4ec";
  }, 400);
}

function updateHistory(entry) {
  history.unshift(entry);
  if (history.length > 5) history.pop();
  historyList.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}

rollBtn.addEventListener("click", () => {
  // Shake + sound
  diceResult.classList.add("shake");
  diceSound.play();

  setTimeout(() => diceResult.classList.remove("shake"), 600);

  let dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `🎲 You rolled: ${dice}`;

  let mode = document.querySelector("input[name='mode']:checked").value;
  let picked = "";

  // reset card + label
  card.className = "";
  card.classList.add("show");
  label.className = "";
  label.textContent = "";

  if (mode === "truth") {
    picked = getRandom(truths);
    card.classList.add("truth");
    label.textContent = "🕊️ Truth 🕊️";
    label.classList.add("truth-label");
  } 
  else if (mode === "dare") {
    picked = getRandom(dares);
    card.classList.add("dare");
    label.textContent = "🎯 Dare 🎯";
    label.classList.add("dare-label");
  } 
  else {
    if (Math.random() < 0.5) {
      picked = getRandom(truths);
      card.classList.add("truth");
      label.textContent = "🕊️ Truth 🕊️";
      label.classList.add("truth-label");
    } else {
      picked = getRandom(dares);
      card.classList.add("dare");
      label.textContent = "🎯 Dare 🎯";
      label.classList.add("dare-label");
    }
  }

  question.textContent = picked;

  // Flash background
  flashBackground();

  // Update history
  updateHistory(`${label.textContent}: ${picked}`);
});

// Theme toggle
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark", themeSwitch.checked);
});