const fonts = {
   default: 'Encode Sans Expanded',
   secondary: 'Pacifico',
}

const breakpoints = {
   xl: '1200',
   lg: '960px',
   md: '768px',
   sm: '480px'
}

const themeColors = {
   basic: {
      xs: '#F2F2F2',
      sm: '#E0E0E0',
      md: '#9E9E9E',
      lg: '#212121',
      xl: '#0D0D0D'
   },
   primary: {
      sm: '#8A84E8',
      md: '#6C63FF',
      lg: '#4842B3',
   },
   opacity1: {
      low: 'rgba(255, 255, 255, 0.1)',
      high: 'rgba(72,66,179, 0.2)',
   },
   opacity2: {
      low: 'rgba(0, 0, 0, 0.1)',
      high: 'rgba(0, 0, 0, 0.8)',
   }
}


export const AppTheme = {
   light: {
      colors: {
         white: themeColors.basic.xs,
         black: themeColors.basic.xl,
         background: {
            sm: themeColors.basic.sm,
            md: themeColors.basic.xs
         },
         text: {
            sm: themeColors.basic.lg,
            md: themeColors.basic.xl
         },
         primary: themeColors.primary,
         opacity: themeColors.opacity1,
      },
      breakpoints,
      fonts,
   },
   dark: {
      colors: {
         white: themeColors.basic.xs,
         black: themeColors.basic.xl,
         background: {
            sm: themeColors.basic.lg,
            md: themeColors.basic.xl
         },
         text: {
            sm: themeColors.basic.sm,
            md: themeColors.basic.xs
         },
         primary: themeColors.primary,
         opacity: themeColors.opacity2,
      },
      breakpoints,
      fonts,
   }
}
