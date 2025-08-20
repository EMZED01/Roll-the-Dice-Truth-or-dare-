const truths = [
  "What's your favorite memory of us?",
  "What’s one thing you’ve never told me?",
  "When did you first realize you liked me?",
  // ... add up to 100
];

const dares = [
  "Send me a cute selfie right now 😏",
  "Say 'I love you' in the funniest voice you can.",
  "Pretend to rap about me for 10 seconds.",
  // ... add up to 100
];

const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const question = document.getElementById("question");

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

rollBtn.addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `🎲 You rolled: ${dice}`;

  let mode = document.querySelector("input[name='mode']:checked").value;
  let picked = "";

  if (mode === "truth") picked = getRandom(truths);
  else if (mode === "dare") picked = getRandom(dares);
  else picked = Math.random() < 0.5 ? getRandom(truths) : getRandom(dares);

  question.textContent = picked;
});
