const message = `Hi bubba. I know we're not okay right now, but I wanna use this as my way to give my sincerest apology. I am sorry, I have done the worst thing i could ever do. I let my emotions do the actions, and I realize it late. I should've made sure, but i was so dumb for not doing it. I deeply understand the anger that you're feeling to me right now, and I respect if u wouldn't talk to me yet. But through this letter, I am asking for forgiveness. I know chances aren't unlimited, but I sincerely ask for one last chance to make things right, and to love you even better. What we have is real, the love I have for you is true. If you let me, I'll be better for you, for us. I love you so much bubba, and i know u know it too as well. I can let go most of the things, but when it comes to you, it scares me the most. No matter how hard it'll be, or how long it will take, I'll make sure to win your love back. I'll court you everyday, and earn your trust once again. This time, no more lies, just pure love. I'm willing to do anything, to give anything, if it means i'll get to keep you. I love you bubba, i really do.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
