const truths = [
  "When did you first think I was cute?",
  "What’s your biggest dream for us?",
  "If you could change one thing about me, what would it be?",
  "What’s the sweetest thing I’ve ever done for you?",
  "Have you ever been jealous of someone around me?",
  "When was the last time you thought about me today?",
  "What’s the most romantic place you’d love to take me?",
  "If I disappeared for a week, what would you miss most?",
  "What’s the first thing you noticed about me?",
  "Have you ever had a dream about me?",
  "Do you get butterflies when you see my name pop up?",
  "Who made the first move between us (in your eyes)?",
  "What’s one thing you’ve never told me?",
  "Do you brag about me to your friends?",
  "What’s your favorite nickname for me?",
  "What’s your love language?",
  "What song reminds you of me?",
  "What’s your favorite memory with me?",
  "If we were in a movie, what genre would it be?",
  "Do you ever stalk my old pictures/messages?",
  "What’s the boldest thing you’d do for me in public?",
  "Do you ever get jealous of my phone? 😂",
  "What’s something small I do that melts your heart?",
  "Would you rather cuddle all night or kiss all night?",
  "If you could take me anywhere right now, where?",
  "Who said “I love you” first?",
  "When did you realize you were in love with me?",
  "What’s one thing you admire about me?",
  "What’s your favorite part of my face?",
  "What’s your favorite part of my body? 👀",
  "What’s a silly fear you have?",
  "If I was mad at you, how would you win me back?",
  "What’s your biggest insecurity?",
  "Who do I remind you of (fictional or celeb)?",
  "What’s the cutest outfit you’ve seen me wear?",
  "What’s something you want us to try together?",
  "If we were married, where would we live?",
  "Do you see us lasting forever?",
  "Have you ever written my name when bored?",
  "What’s your favorite word I say?",
  "Do you like when I tease you?",
  "What makes you laugh the most?",
  "Do you get shy around me sometimes?",
  "What’s one pet name you secretly want me to call you?",
  "What’s a secret fantasy you’ve had about us? 👀",
  "Do you think about me before bed?",
  "Have you ever lied to me (even small)?",
  "What’s one thing you wish we did more often?",
  "Do you prefer me sweet or spicy?",
  "Would you ever tattoo something about me?"
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

  // Show card with animation
  document.getElementById("card").classList.add("show");
});