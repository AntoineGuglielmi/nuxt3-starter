const gen = (params = {}) => {
  const ret = {};
  const {
    suffix = 'r',
    unit = 'rem',
    from = 0.25,
    to = 10,
    step = 0.25
  } = params;
  for(let i = from; i <= to; i += step) {
    ret[`${i}${suffix}`] = `${i}${unit}`;
  }
  return ret;
}

const rems = {
  ...gen()
};

const ems = {
  ...gen({
    suffix: 'e',
    unit: 'em'
  })
};

const pxsSmall = {
  ...gen({
    suffix: 'p',
    unit: 'px',
    from: 1,
    to: 50,
    step: 1
  })
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        bp640: '640px',
        bp768: '768px',
        bp1024: '1024px',
        bp1280: '1280px',
        bp1536: '1536px',
      },
      fontFamily: {
        nunito: 'Nunito, sans-serif'
      },
      padding: {
        ...rems,
        ...ems
      },
      margin: {
        ...rems,
        ...ems
      },
      fontSize: {
        ...rems,
        ...ems
      }
    },
  },
  plugins: [],
}

