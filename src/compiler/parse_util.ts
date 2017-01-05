export class ParseLocation {
  constructor(
    public source: ParseSource, public offset: number, public line: number,
    public col: number) { }

  toString(): string {
    return this.offset !== null ? `${this.source.url}@${this.line}:${this.col}` : this.source.url;
  }
}

export class ParseSource {
  constructor(public content: string, public url: string) { }
}

export class ParseSourceSpan {
  constructor(
    public start: ParseLocation, public end: ParseLocation, public details: string = null) { }

  toString(): string {
    return this.start.source.content.substring(this.start.offset, this.end.offset);
  }
}

export enum ParseErrorLevel {
  WARNING,
  ERROR
}

export class ParseError {
  constructor(public span: ParseSourceSpan, public msg: string,
    public level: ParseErrorLevel = ParseErrorLevel.ERROR) { }

  toString(): string {
    const source = this.span.start.source.content;
    let ctxStart = this.span.start.offset;
    let contextStr = '';
    let details = '';
    if (ctxStart !== null) {
      if (ctxStart > source.length - 1) {
        ctxStart = source.length - 1;
      }
      let ctxEnd = ctxStart;
      let ctxLen = 0;
      let ctxLines = 0;

      while (ctxLen < 100 && ctxStart > 0) {
        ctxStart--;
        ctxLen++;
        if (source[ctxStart] == '\n') {
          if (++ctxLines == 3) {
            break;
          }
        }
      }

      ctxLen = 0;
      ctxLines = 0;
      while (ctxLen < 100 && ctxEnd < source.length - 1) {
        ctxEnd++;
        ctxLen++;
        if (source[ctxEnd] == '\n') {
          if (++ctxLines == 3) {
            break;
          }
        }
      }

      const context = source.substring(ctxStart, this.span.start.offset) + '[ERROR ->]' +
        source.substring(this.span.start.offset, ctxEnd + 1);
      contextStr = ` ("${context}")`;
    }
    if (this.span.details) {
      details = `, ${this.span.details}`;
    }
    return `${this.msg}${contextStr}: ${this.span.start}${details}`;
  }
}
