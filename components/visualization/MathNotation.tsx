'use client';

import React, { useEffect, useState } from 'react';

interface MathNotationProps {
  math: string;
  inline?: boolean;
  className?: string;
}

export default function MathNotation({ math, inline = false, className = '' }: MathNotationProps) {
  const [rendered, setRendered] = useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      // Dynamically import katex only on client side
      import('katex').then((katex) => {
        // @ts-ignore - CSS import works at runtime
        import('katex/dist/katex.min.css');

        try {
          if (ref.current) {
            katex.default.render(math, ref.current, {
              displayMode: !inline,
              throwOnError: false,
              trust: true,
            });
            setRendered(true);
          }
        } catch (error) {
          console.error('KaTeX rendering error:', error);
        }
      });
    }
  }, [math, inline]);

  return (
    <span
      ref={ref}
      className={`${className} ${rendered ? '' : 'opacity-0'}`}
      aria-label={math}
    />
  );
}
