import { ParseSource, ParseSourceSpan } from './parse_util';
import * as chars from './chars';

export enum TokenType {
  LINE,
  EOF
}


export class Token {
  constructor(public type: TokenType, public parts: string[], public sourceSpan: ParseSourceSpan) {}
}


export function tokenize(source: string, url: string) {
  return new Tokenizer(new ParseSource(source, url)).tokenize();
}

export class Tokenizer {
  private _input: string;
  private _length: number;
  private _peek: number = -1;
  private _nextPeek: number = -1;
  private _index: number = -1;
  private _line: number = 0;
  private _column: number = -1;

  constructor(private _source: ParseSource) {
    this._input = _source.content;
    this._length = _source.content.length;
    this._advance();

    // tokens: Token[] = [];
    // errors: TokenError[] = [];
  }

  tokenize() {

    while (this._peek !== chars.$EOF) {
      console.log(this._peek);
      this._advance();
    }

    console.log(this._input);
    console.log(this._length);
  }

  private _advance() {
    if (this._index >= this._length) {
      // throw this._createError(_unexpectedCharacterErrorMsg(chars.$EOF), this._getSpan());
    }
    if (this._peek === chars.$LF) {
      this._line++;
      this._column = 0;
    } else if (this._peek !== chars.$LF && this._peek !== chars.$CR) {
      this._column++;
    }
    this._index++;
    this._peek = this._index >= this._length ? chars.$EOF : this._input.charCodeAt(this._index);
    this._nextPeek =
        this._index + 1 >= this._length ? chars.$EOF : this._input.charCodeAt(this._index + 1);
  }
}
