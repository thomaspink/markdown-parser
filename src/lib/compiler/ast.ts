import { ParseSourceSpan } from './parse_util';

export type TextTypes = Text | LineBreak;

export interface Ast {
  sourceSpan: ParseSourceSpan;
}

export class Text implements Ast {
  constructor(public value: string, public sourceSpan: ParseSourceSpan) { }
}

export abstract class TextCollection implements Ast {
  constructor(public values: TextTypes[], public sourceSpan: ParseSourceSpan) { }
}

export class BoldText extends TextCollection { }

export class ItalicText extends TextCollection { }

export class StrikethroughText extends TextCollection { }

export class LineBreak implements Ast {
  constructor(public sourceSpan: ParseSourceSpan) { }
}

export class Paragraph extends TextCollection { }

export class Blockquote extends TextCollection { }

export class ListItem extends Text { }

export abstract class List implements Ast {
  constructor(public items: ListItem[], public sourceSpan: ParseSourceSpan) { }
}

export class UnorderedList extends List { }
export class OrderedList extends List { }

export class Image implements Ast {
  constructor(public alt: string, public src: string, public sourceSpan: ParseSourceSpan) { }
}

export class Link implements Ast {
  constructor(public values: TextTypes[], public src: string,
    public sourceSpan: ParseSourceSpan) { }
}
