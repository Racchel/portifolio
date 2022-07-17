const fonts = {
   default: 'Encode Sans Expanded',
   secondary: '',
}

const breakpoints = {
   md: '960px',
   sm: '768px'
}

const themeColors = {
   dark: '#0d0d0d',
   light: '#cacaca'
}

const colorPalette = {
   mainLight: '#2929ab',
   main: '#191970',
   mainDark: '#0c0c38',
   white: '#fff'
}

export const AppTheme = {
   light: {
      colors: {
         background: themeColors.light,
         text: themeColors.dark,
         ...colorPalette
      },
      breakpoints,
      fonts,
   },
   dark: {
      colors: {
         background: themeColors.dark,
         text: themeColors.light,
         ...colorPalette
      },
      breakpoints,
      fonts,
   }
}
