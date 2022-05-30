import '../styles/entry.scss'
import type { AppProps } from 'next/app'
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/vbscript-html';
import css from 'highlight.js/lib/languages/css';
import { useEffect, useState } from 'react';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');
  useEffect(() =>{ hljs.initHighlighting();
    if(theme === "dark") {
      require('highlight.js/styles/atom-one-dark.css');
    }else {
      require('highlight.js/styles/atom-one-light.css');
    }
  }, [theme])
  return <Component {...pageProps} />
}

export default MyApp
