export class ParseLocation {
  constructor(
      public file: ParseSource, public offset: number, public line: number,
      public col: number) {}

  toString(): string {
    return this.offset !== null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
}

export class ParseSource {
  constructor(public content: string, public url: string) {}
}

export class ParseSourceSpan {
  constructor(
      public start: ParseLocation, public end: ParseLocation, public details: string = null) {}

  toString(): string {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
}