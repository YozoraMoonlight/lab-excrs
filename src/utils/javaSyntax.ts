export type TokenKind = 'keyword' | 'type' | 'string' | 'comment' | 'number' | 'method' | 'plain';

export interface Token {
  text: string;
  kind: TokenKind;
}

const KEYWORDS = new Set(['import', 'public', 'private', 'class', 'static', 'void', 'new', 'return', 'int', 'double', 'boolean', 'char', 'long', 'final', 'if', 'else']);
const TYPES = new Set(['String', 'Scanner', 'System']);
const TOKEN_PATTERN = /(\/\/.*$)|("(?:[^"\\]|\\.)*")|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)/g;

export function tokenizeJavaLine(line: string): Token[] {
  const tokens: Token[] = [];
  const pattern = new RegExp(TOKEN_PATTERN.source, 'g');
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(line)) !== null) {
    if (match.index > last) tokens.push({ text: line.slice(last, match.index), kind: 'plain' });
    const [text, comment, str, num, ident] = match;
    let kind: TokenKind = 'plain';
    if (comment) kind = 'comment';else
    if (str) kind = 'string';else
    if (num) kind = 'number';else
    if (ident) {
      if (KEYWORDS.has(ident)) kind = 'keyword';else
      if (TYPES.has(ident)) kind = 'type';else
      if (line[match.index + text.length] === '(') kind = 'method';
    }
    tokens.push({ text, kind });
    last = match.index + text.length;
  }

  if (last < line.length) tokens.push({ text: line.slice(last), kind: 'plain' });
  return tokens;
}