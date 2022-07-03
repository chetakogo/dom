// TODO: write code here
const wrap = document.getElementsByClassName('game')[0];
const img = document.images[0];
img.innerHTML = '';

for (let i = 0; i < 4 * 4; i += 1) {
  const div = document.createElement('div');
  wrap.appendChild(div);
}

function randomPosition() {
  return Math.floor(1 + Math.random() * 16);
}
function insertImg() {
  if (document.images[0]) {
    img.innerHTML = '';
  }
  const childDivs = wrap.children;
  const index = randomPosition();
  childDivs[index].appendChild(img);
}

const changePosition = setInterval(insertImg, 1000);

setTimeout(() => clearInterval(changePosition), 100000);
