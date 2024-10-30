export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'abril-fatface': ['Abril Fatface', 'cursive'],
      },
      colors: {
        primary: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary), ${opacityValue})`
          }
          return `rgb(var(--primary))`
        },
        'primary-darker': ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-darker), ${opacityValue})`
          }
          return `rgb(var(--primary-darker))`
        },
        secondary: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--secondary), ${opacityValue})`
          }
          return `rgb(var(--secondary))`
        },
        background: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--background), ${opacityValue})`
          }
          return `rgb(var(--background))`
        },
        gray: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--gray), ${opacityValue})`
          }
          return `rgb(var(--gray))`
        },
        text: ({ opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--text), ${opacityValue})`
          }
          return `rgb(var(--text))`
        },
        success: {
          base: '#1FC16B',
        },
        error: {
          base: '#FB3748',
        },
        away: {
          base: '#F6B51E',
        },
        faded: {
          base: '#717784',
        },
        sub: {
          300: '#CACFD8',
          600: '#666666',
        },
        overlay: 'var(--overlay-color)',
      },
      boxShadow: {
        box: '0px -4px 8px 0px rgba(0, 0, 0, 0.04)',
      },
      //
      width: {
        limitWidth: 'var(--limit-width)',
      },
      minHeight: {
        'navbar-height': 'var(--navbar-height)',
        'header-height': 'var(--header-height)',
        'ios-pb': 'var(--ios-pb)',
      },
      zIndex: {
        toast: 'var(--z-index-toast)',
        navbar: 'var(--z-index-navbar)',
        modal: 'var(--z-index-modal)',
      },
      padding: {
        'ios-pb': 'var(--ios-pb)',
        'navbar-height': 'var(--navbar-height)',
        'header-height': 'var(--header-height)',
      },
      opacity: {
        active: '0.7',
      },
    },
  },
  plugins: [],
}
