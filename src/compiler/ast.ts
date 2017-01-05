import { ParseSourceSpan } from './parse_util';

export type TextAstTypes = TextAst | BreakLineAst;

export interface Ast {
  sourceSpan: ParseSourceSpan;
}

export class TextAst implements Ast {
  constructor(public value: string, public sourceSpan: ParseSourceSpan) { }
}

export abstract class TextCollectionAst implements Ast {
  constructor(public values: TextAstTypes[], public sourceSpan: ParseSourceSpan) { }
}

export class BoldTextAst extends TextCollectionAst { }

export class ItalicTextAst extends TextCollectionAst { }

export class StrikethroughTextAst extends TextCollectionAst { }

export class BreakLineAst implements Ast {
  constructor(public sourceSpan: ParseSourceSpan) { }
}

export class ParagraphAst extends TextCollectionAst { }

export class Blockquote extends TextCollectionAst { }

export class ListItemAst extends TextAst { }

export abstract class ListAst implements Ast {
  constructor(public items: ListItemAst[], public sourceSpan: ParseSourceSpan) { }
}

export class UnorderedListAst extends ListAst { }
export class OrderedListAst extends ListAst { }

export class ImageAst implements Ast {
  constructor(public alt: string, public src: string, public sourceSpan: ParseSourceSpan) { }
}

export class LinkAst implements Ast {
  constructor(public values: TextAstTypes[], public src: string,
    public sourceSpan: ParseSourceSpan) { }
}
