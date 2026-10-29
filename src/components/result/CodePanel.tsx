import React, { useMemo, useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { TokenKind, tokenizeJavaLine } from '../../utils/javaSyntax';

interface CodePanelProps {
  code: string;
  fileName: string;
}

const TOKEN_COLORS: Record<TokenKind, string> = {
  keyword: '#CF8E6D',
  type: '#C7A6F2',
  string: '#6AAB73',
  comment: '#7A7E85',
  number: '#2AACB8',
  method: '#56A8F5',
  plain: '#BCBEC4'
};

export function CodePanel({ code, fileName }: CodePanelProps) {
  const [copied, setCopied] = useState(false);
  const lines = useMemo(() => code.split('\n').map(tokenizeJavaLine), [code]);

  const handleCopy = async () => {
    const ok = await copyText(code);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section aria-label={fileName}>
      <button
        type="button"
        onClick={handleCopy}
        className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border-2 border-ink bg-accent font-display text-lg text-white shadow-manga hover:bg-accent-hover active:translate-x-[3px] active:translate-y-[3px] active:shadow-manga-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
        
        {copied ? <CheckIcon className="h-5 w-5" aria-hidden="true" /> : <CopyIcon className="h-5 w-5" aria-hidden="true" />}
        <span aria-live="polite">{copied ? 'Copied!' : 'Copy code'}</span>
      </button>

      <div className="mt-5 overflow-hidden rounded-2xl border-2 border-ink bg-editor-bg shadow-manga">
        <div className="border-b border-white/10 bg-editor-gutter px-4 py-2.5 font-mono text-[13px] text-editor-text">{fileName}</div>
        <div className="overflow-x-auto">
          <pre className="p-4 font-mono text-[12px] leading-6 sm:text-[13px]">
            <code>
              {lines.map((tokens, index) =>
              <div key={index} className="whitespace-pre">
                  {tokens.length === 0 ?
                ' ' :
                tokens.map((token, i) =>
                <span key={i} style={{ color: TOKEN_COLORS[token.kind] }}>
                          {token.text}
                        </span>
                )}
                </div>
              )}
            </code>
          </pre>
        </div>
      </div>
    </section>);

}

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement('textarea');
    area.value = text;
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    return ok;
  }
}