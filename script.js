document.getElementById('gift-box').addEventListener('click', function () {
  const leftHalf = document.querySelector('.left-half');
  const rightHalf = document.querySelector('.right-half');
  const message = document.querySelector('.message');
  const siteContent = document.getElementById('site-content');

  // Hide the message text
  message.style.display = 'none';

  // Start the tearing animation for the left and right halves
  leftHalf.style.animation = 'tearOpenLeft 1.5s ease-in-out forwards';
  rightHalf.style.animation = 'tearOpenRight 1.5s ease-in-out forwards';

  // Show the website content slowly as the box unwraps
  setTimeout(() => {
    document.getElementById('gift-box').style.display = 'none'; // Hide the gift box after tearing
    siteContent.style.display = 'block'; // Show the website content
    siteContent.classList.remove('hidden'); // Start the fade-in effect
  }, 1500); // Match the duration of the tearing animation

  // Play the song with a fade-in effect
  const audio = new Audio('audio.mp3'); // Replace 'your-audio-file.mp3' with the actual audio file
  audio.volume = 0; // Start with volume 0
  audio.play();
  audio.loop=true;

  // Gradually increase the volume
  let fadeAudio = setInterval(() => {
    if (audio.volume < 1) {
      audio.volume += 0.05; // Increase the volume in steps
    } else {
      clearInterval(fadeAudio); // Stop once the volume reaches 1
    }
  }, 200); // Increase volume every 200ms (adjust as needed)
});
