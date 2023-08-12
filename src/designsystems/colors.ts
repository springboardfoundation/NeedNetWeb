/** The primary color palette is used across all the interactive
 *  elements such as CTA’s, links, inputs, active states etc.
 * */
const primary = {
  50: '#C6F8E7',
  100: '#89F3D9',
  200: '#53E1CD',
  300: '#34C5BF',
  400: '#23969C',
  main: '#216E79',
  800: '#0B4953',
};

/**
 * The secondary color palette is used alongside the primary
 * to indicate to the user it’s the secondary focus.
 */
const secondary1 = {
  50: '#FFE5F8',
  100: '#FFCEF1',
  200: '#F685D6',
  300: '#E64BBC',
  400: '#CD28A4',
  main: '#A71689',
  800: '#8C067A',
};

/**
 * The secondary color palette is used alongside the primary to
 * indicate to the user it’s the secondary focus.
 */
const secondary2 = {
  50: '#E4DFFB',
  100: '#CFC0FB',
  200: '#B69FFB',
  300: '#997CF1',
  400: '#6F46EA',
  main: '#5A2AEA',
  800: '#3911B0',
};

/**
 * The interactive color palette is used for interactive components like links
 */
const interactive = {
  50: '#E2EBFF',
  100: '#B3CCFF',
  200: '#86AFFF',
  300: '#6296FF',
  400: '#4680FD',
  main: '#306CEE',
  800: '#0A50E6',
};

/**
 * These colors indicate an emotion of positivity.
 * Generally used across success, complete states.
 */
const success = {
  50: '#F8FFFB',
  200: '#D7FDE9',
  300: '#85F0B4',
  main: '#18AA41',
  800: '#047D26',
};

/**
 * These colors indicate an emotion of holding.
 * Generally used across warning or pending states.
 */
const warning = {
  50: '#F8FFFB',
  200: '#D7FDE9',
  300: '#85F0B4',
  main: '#18AA41',
  800: '#047D26',
};

/**
 * These colors indicate an emotion of negativity.
 * Generally used across error states.
 */
const error = {
  50: '#FFF4F0',
  200: '#FFE5DB',
  300: '#FF7A7B',
  main: '#FF0000',
  800: '#C00707',
};

/**
 * These colors are used as supporting secondary colors in:
 * backgrounds, text colors, separators etc.
 */
const neutrals = {
  50: '#F6F6F6',
  100: '#E6E6E6',
  200: '#B2B2B2',
  300: '#CBCBCB',
  400: '#909090',
  500: '#797979',
  600: '#636363',
  700: '#484848',
  800: '#333333',
  900: '#181818',
};

/**
 * Crypto colors
 */
const crypto = {
  50: '#FFECE2',
  500: '#FF6B1F',
};

/**
 * These pending indicate an waiting/pending state
 * Generally used across warn or loading states.
 */
const pending = {
  300: '#FFDB70',
  500: '#FFBF00',
  800: '#ECB100',
};

/**
 * These colors are used as supporting secondary colors in:
 * backgrounds, text colors, separators etc.
 */
const shades = {
  0: '#ffffff',
  100: '#000000',
};

const opacity = {
  blackOpacity: 'rgba(0,0,0,0.5)',
  modalOpacity: 'rgba(72, 72, 72, 0.8)',
  shadowCardOpacity: 'rgba(0, 0, 0, 0.5)' ,
};

const debenture = {
  50: '#FFF4F0',
  main: '#FFBF00',
};

export {
  error,
  shades,
  crypto,
  primary,
  warning,
  success,
  neutrals,
  secondary1,
  secondary2,
  interactive,
  opacity,
  pending,
  debenture,
};
