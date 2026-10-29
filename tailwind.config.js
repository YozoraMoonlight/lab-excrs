export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        canvas: '#FBF1E3',
        surface: '#FFFFFF',
        ink: '#1B1530',
        muted: '#5E5470',
        subtle: '#8C83A0',
        line: '#EAD9C6',
        'line-strong': '#1B1530',
        accent: { DEFAULT: '#3445B4', hover: '#2A3897', soft: '#E3E7FF' },
        sky: { soft: '#D6ECFF' },
        sun: { DEFAULT: '#FFD84D', soft: '#FFF1B8' },
        mint: { soft: '#D3F3E2' },
        peach: { soft: '#FFE3CC' },
        success: { DEFAULT: '#167A47', soft: '#E4F3EA' },
        danger: { DEFAULT: '#C21F3A', soft: '#FDEDEB' },
        editor: { bg: '#1E1B2E', gutter: '#2A2640', text: '#C9C3DD' },
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'system-ui', 'sans-serif'],
        display: ['"Mochiy Pop One"', '"M PLUS Rounded 1c"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        manga: '4px 4px 0 #1B1530',
        'manga-sm': '2px 2px 0 #1B1530',
      },
    },
  },
};
