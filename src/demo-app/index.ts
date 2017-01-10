import { MarkdownParser } from 'markdown-parser';

const textEl = document.querySelector('textarea');
const resultEl = document.querySelector('.result');
const parser = new MarkdownParser();

function updateResult() {
  resultEl.innerHTML = textEl.value;
  console.log(parser.parse(textEl.value, 'textarea'));
}

let timer = 0;
textEl.addEventListener('input', (event) => {
  clearTimeout(timer);
  timer = setTimeout(updateResult, 200);
});

updateResult();
