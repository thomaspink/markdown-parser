const textEl = document.querySelector('textarea');
const resultEl = document.querySelector('.result');

function updateResult() {
  resultEl.innerHTML = textEl.value;
}

let timer = 0;
textEl.addEventListener('input', (event) => {
  clearTimeout(timer);
  timer = setTimeout(updateResult, 300);
});

updateResult();
