const truths = [
  "1. When did you first think I was cute?",
  "2. What’s your biggest dream for us?",
  "3. If you could change one thing about me, what would it be?",
  "4. What’s the sweetest thing I’ve ever done for you?",
  "5. Have you ever been jealous of someone around me?",
  "6. When was the last time you thought about me today?",
  "7. What’s the most romantic place you’d love to take me?",
  "8. If I disappeared for a week, what would you miss most?",
  "9. What’s the first thing you noticed about me?",
  "10. Have you ever had a dream about me?",
  "11. Do you get butterflies when you see my name pop up?",
  "12. Who made the first move between us (in your eyes)?",
  "13. What’s one thing you’ve never told me?",
  "14. Do you brag about me to your friends?",
  "15. What’s your favorite nickname for me?",
  "16. What’s your love language?",
  "17. What song reminds you of me?",
  "18. What’s your favorite memory with me?",
  "19. If we were in a movie, what genre would it be?",
  "20. Do you ever stalk my old pictures/messages?",
  "21. What’s the boldest thing you’d do for me in public?",
  "22. Do you ever get jealous of my phone? 😂",
  "23. What’s something small I do that melts your heart?",
  "24. Would you rather cuddle all night or kiss all night?",
  "25. If you could take me anywhere right now, where would that be?",
  "26. Who said “I love you” first?",
  "27. When did you realize you were in love with me?",
  "28. What’s one thing you admire about me?",
  "29. What’s your favorite part of my face?",
  "30. What’s your favorite part of my body? 👀",
  "31. What’s a silly fear you have?",
  "32. If I was mad at you, how would you win me back?",
  "33. What’s your biggest insecurity?",
  "34. Who do I remind you of (fictional or celeb)?",
  "35. What’s the cutest outfit you’ve seen me wear?",
  "36. What’s something you want us to try together?",
  "37. If we were married, where would we live?",
  "38. Do you see us lasting forever?",
  "39. Have you ever written my name when bored?",
  "40. What’s your favorite word I say?",
  "41. Do you like when I tease you?",
  "42. What makes you laugh the most?",
  "43. Do you get shy around me sometimes?",
  "44. What’s one pet name you secretly want me to call you?",
  "45. What’s a secret fantasy you’ve had about us? 👀",
  "46. Do you think about me before bed?",
  "47. Have you ever lied to me (even small)?",
  "48. What’s one thing you wish we did more often?",
  "49. Do you prefer me sweet or spicy?",
  "50. Would you ever tattoo something about me?"
];

const dares = [
  "1. Do 10 pushups while saying my name each time.",
  "2. Sing a love song to me right now.",
  "3. Text me something flirty without using words (just emojis).",
  "4. Record yourself saying 'I love you' in 3 funny voices.",
  "5. Send me your cutest selfie right now.",
  "6. I dare you to compliment me 5 times in a row.",
  "7. Do your best impression of me.",
  "8. Draw a heart on your hand and send me a pic.",
  "9. Change your profile picture to something that reminds you of me (for an hour).",
  "10. Write my name somewhere on your arm and send proof.",
  "11. Pretend you’re proposing to me — right now.",
  "12. Share your lock screen with me.",
  "13. Make me laugh in the next 30 seconds — go!",
  "14. Try to wink and blow a kiss at the same time 😂.",
  "15. Say 3 things you’d do if we were together right now.",
  "16. I dare you to tell me your most recent dream.",
  "17. Act like you’re jealous for 1 minute.",
  "18. Send me a random throwback picture.",
  "19. Do a silly dance and describe it to me.",
  "20. Whisper my name like it’s a secret.",
  "21. Write me a one-line poem on the spot.",
  "22. Try to rap about me in 10 seconds.",
  "23. Send me the last picture in your gallery.",
  "24. Pretend you’re mad at me and then forgive me.",
  "25. Say 'I’m yours' in the cutest way you can.",
  "26. Spell my name backward and say something sweet.",
  "27. Act like a love-struck movie character for 30 seconds.",
  "28. Describe me using only food items.",
  "29. Send me a picture of something you’re looking at right now.",
  "30. Count from 1–20 as fast as you can with no mistakes.",
  "31. Pretend you’re serenading me on guitar (without music).",
  "32. Try to talk like me for 1 minute.",
  "33. Draw a quick doodle of us and send it.",
  "34. Make up a silly nickname for me right now.",
  "35. Pretend you’re writing vows for me — 2 lines only.",
  "36. Do a fake cry until I laugh.",
  "37. Say one bold thing you’d do if we were on a date now.",
  "38. Send me a funny meme that reminds you of us.",
  "39. Shout 'I love you' (and prove it somehow 😂).",
  "40. Pretend you’re on a cooking show making food for me.",
  "41. Say 3 things you’d do to cheer me up on a bad day.",
  "42. Sing me a random jingle about us.",
  "43. Act like you’re writing me a love letter right now.",
  "44. Describe a kiss without saying the word 'kiss'.",
  "45. Say something super cheesy like a rom-com line.",
  "46. Pretend you’re on the phone with me and act shy.",
  "47. Create a pickup line just for me.",
  "48. Describe our future house in 10 words.",
  "49. Pretend you’re seeing me for the first time again.",
  "50. Tell me one thing you want us to do this week."
];

// Elements
const rollBtn = document.getElementById("rollBtn");
const diceResult = document.getElementById("diceResult");
const question = document.getElementById("question");
const card = document.getElementById("card");

// Shuffle helper
function shuffle(array) {
  let copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Queues for non-repeating
let truthQueue = shuffle(truths);
let dareQueue = shuffle(dares);

function getNext(queue, original) {
  if (queue.length === 0) queue = shuffle(original);
  return queue.shift();
}

rollBtn.addEventListener("click", () => {
  let mode = document.querySelector("input[name='mode']:checked").value;
  let picked = "";

  // remove old styles
  card.classList.remove("truth", "dare");

  if (mode === "truth") {
    picked = getNext(truthQueue, truths);
    diceResult.textContent = "🕊️ 𝗧𝗥𝗨𝗧𝗛 🕊️";
    card.classList.add("truth");
  } else if (mode === "dare") {
    picked = getNext(dareQueue, dares);
    diceResult.textContent = "🎯 𝗗𝗔𝗥𝗘 🎯";
    card.classList.add("dare");
  } else {
    if (Math.random() < 0.5) {
      picked = getNext(truthQueue, truths);
      diceResult.textContent = "🕊️ 𝗧𝗥𝗨𝗧𝗛 🕊️";
      card.classList.add("truth");
    } else {
      picked = getNext(dareQueue, dares);
      diceResult.textContent = "🎯 𝗗𝗔𝗥𝗘 🎯";
      card.classList.add("dare");
    }
  }

  question.textContent = picked;
  card.classList.add("show");
});