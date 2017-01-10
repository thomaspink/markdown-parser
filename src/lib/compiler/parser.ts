import { tokenize } from './lexer';

export class MarkdownParser {
  parse(source: string, url: string) {
    const resultAst = tokenize(source, url);
  }
}
