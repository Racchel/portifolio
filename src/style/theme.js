const fonts = {
   default: 'Encode Sans Expanded',
   secondary: '',
}

const breakpoints = {
   lg: '960px',
   md: '768px',
   sm: '480px'
}

const themeColors = {
   dark: '#0d0d0d',
   light: '#cacaca'
}

const colorPalette = {
   mainLight: '#2929ab',
   main: '#191970',
   mainDark: '#0c0c38',
   white: '#fff',
   black: '#0d0d0d',
}

export const AppTheme = {
   light: {
      colors: {
         background: themeColors.light,
         text: themeColors.dark,
         opacity: 'rgba(255, 255, 255, 0.2)',
         ...colorPalette
      },
      breakpoints,
      fonts,
   },
   dark: {
      colors: {
         background: themeColors.dark,
         text: themeColors.light,
         opacity: 'rgba(0, 0, 0, 0.2)',
         ...colorPalette
      },
      breakpoints,
      fonts,
   }
}
