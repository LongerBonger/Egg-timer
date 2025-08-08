let countdown;

function startTimer(minutes, type) {
  clearInterval(countdown);
  let seconds = minutes * 60;
  document.getElementById('menu').style.display = 'none';
  document.getElementById('timer').style.display = 'block';
  document.getElementById('resetBtn').style.display = 'inline-block';
  document.getElementById('boilingEggGif').style.display = 'block'; // Show the GIF when timer starts

  document.getElementById('timer').innerHTML = type + ' - ' + formatTime(seconds);

  countdown = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(countdown);
      document.getElementById('timer').innerHTML = 'Your egg is ready!';
      document.getElementById('boilingEggGif').style.display = 'none'; // Hide the GIF when timer ends
    } else {
      document.getElementById('timer').innerHTML = type + ' - ' + formatTime(seconds);
    }
  }, 1000);
}

function formatTime(sec) {
  let m = Math.floor(sec / 60);
  let s = sec % 60;
  return m + ':' + (s < 10 ? '0' : '') + s;
}

function resetTimer() {
  clearInterval(countdown);
  document.getElementById('menu').style.display = 'flex';
  document.getElementById('timer').style.display = 'none';
  document.getElementById('resetBtn').style.display = 'none';
  document.getElementById('boilingEggGif').style.display = 'none'; // Hide GIF on reset
}

// Register service worker if supported
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}