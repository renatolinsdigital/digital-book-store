const visualIdentityColors = {
  primary: '#e63946',
  primaryDark: '#b82635',

  secondary: '#1d3557',
  secondaryDark: '#14233b',

  tertiary: '#f1faee',
  tertiaryDark: '#c1d8ce'
};

const neutralColors = {
  dark: '#131313',
  white: '#ffffff',
  gray1: '#fcfcfc',
  gray2: '#ECECEC',
  gray3: '#d9d9d9',
  gray4: '#c3c3c3',
  gray5: '#999999',
  inherit: 'inherit',
  transparent: 'transparent'
};

const semanticColors = {
  info: '#00BBFF',
  infoDark: '#0f98ca',

  alert: '#F4973C',
  alertDark: '#c96d13',

  success: '#039B00',
  successDark: '#068303',

  danger: '#dc3545',
  dangerDark: '#c82333'
};

export const lightColors = {
  buttonText: neutralColors.white,
  appBackground: neutralColors.white,
  text: visualIdentityColors.secondary,
  heading: visualIdentityColors.secondary,
  textBold: visualIdentityColors.secondary,
  buttonBackground: visualIdentityColors.primary,
  containerBackground: visualIdentityColors.secondary,
  buttonBackgroundHover: visualIdentityColors.primaryDark
};

export const darkColors = {
  text: neutralColors.white,
  heading: neutralColors.white,
  textBold: neutralColors.white,
  buttonText: neutralColors.white,
  appBackground: neutralColors.dark,
  buttonBackground: visualIdentityColors.primary,
  containerBackground: visualIdentityColors.secondary,
  buttonBackgroundHover: visualIdentityColors.primaryDark
};

export const defaultTheme = {
  /* Colors configuration */

  isInDarkMode: false,
  colors: {
    ...neutralColors,
    ...semanticColors,
    ...visualIdentityColors
  },

  variantColors: {
    ...lightColors // Starts with light colors
  },

  /* Typography Configuration */

  fontFamilies: {
    inherit: ['inherit', 'sans-serif'],

    body: ['"Open Sans Regular"', 'sans-serif'],
    bodyBold: ['"Open Sans SemiBold"', 'sans-serif'],

    heading1: ['"Open Sans Bold"', 'sans-serif'],
    heading2: ['"Open Sans SemiBold"', 'sans-serif'],

    link: ['"Open Sans SemiBold"', 'sans-serif'],
    uiElement: ['"Open Sans SemiBold"', 'sans-serif']
  },
  fontSizesPx: {
    smallest: 10,
    superSmall: 12,
    small: 14,
    default: 16,
    large: 18,
    extraLarge: 20,
    huge: 24,
    jumbo: 32,
    biggest: 40
  },
  fontSizes: {
    smallest: 0.625,
    superSmall: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125,
    extraLarge: 1.25,
    huge: 1.5,
    jumbo: 2,
    biggest: 2.5
  },

  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700
  },

  lineHeights: {
    small: 1,
    default: 1.2,
    tall: 1.5,
    taller: 1.8,
    big: 2,
    biggest: 2.4
  },

  /* Timings */

  transitions: {
    defaultTime: '.2s',
    defaultAll: 'all .2s ease'
  }
};
