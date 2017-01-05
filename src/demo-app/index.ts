const textEl = document.querySelector('textarea');
const resultEl = document.querySelector('.result');

function updateResult() {
  console.log('update');
  resultEl.innerHTML = textEl.value;
}

let timer = 0;
textEl.addEventListener('input', (event) => {
  clearTimeout(timer);
  timer = setTimeout(updateResult, 150);
});

updateResult();
