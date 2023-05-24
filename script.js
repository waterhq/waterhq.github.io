let score = 0;

function addPoint() {
  score++;
  updateScore();
  createHeart();
}

function updateScore() {
  const scoreElement = document.getElementById('score');
  scoreElement.innerText = score;
}

function createHeart() {
  const heartsContainer = document.getElementById('hearts');
  const heart = document.createElement('span');
  heart.className = 'heart';
  heart.innerText = '❤';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000);
}

