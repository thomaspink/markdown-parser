import { BreakLineAst } from 'markdown-parser';

const textEl = document.querySelector('textarea');
const resultEl = document.querySelector('.result');

function updateResult() {
  resultEl.innerHTML = textEl.value;
}

let timer = 0;
textEl.addEventListener('input', (event) => {
  clearTimeout(timer);
  timer = setTimeout(updateResult, 200);
});

updateResult();
