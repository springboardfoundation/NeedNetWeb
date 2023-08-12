const SCREEN_SIZE = {
  S: '375px',
  M: '768px',
  L: '1440px',
  XL: '2560px',
};

const screens = {
  [SCREEN_SIZE.S]: {
    columns: 4,
    margin: '16px',
    gutter: '16px',
  },
  [SCREEN_SIZE.M]: {
    columns: 8,
    margin: '36px',
    gutter: '24px',
  },
  [SCREEN_SIZE.L]: {
    columns: 12,
    margin: '48px',
    gutter: '24px',
  },
  [SCREEN_SIZE.XL]: {
    columns: 12,
    margin: '48px',
    gutter: '24px',
  },
};

export {screens, SCREEN_SIZE};
