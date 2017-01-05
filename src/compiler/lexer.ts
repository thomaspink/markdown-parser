import { ParseSource } from './parse_util';

export function tokenize(source: string, url: string) {
  return new Tokenizer(new ParseSource(source, url)).tokenize();
}

export class Tokenizer {
  private _input: string;
  private _length: number;

  constructor(private _source: ParseSource) {
    this._input = _source.content;
    this._length = _source.content.length;

    // tokens: Token[] = [];
    // errors: TokenError[] = [];
  }

  tokenize() { }
}
