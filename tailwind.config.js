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
    suffix: 'x',
    unit: 'px',
    from: 1,
    to: 50,
    step: 1
  })
};

const percents = {
  ...gen({
    suffix: 'p',
    unit: '%',
    from: 2.5,
    to: 150,
    step: 2.5
  })
};

const slashPercents = {
  '1/1': '100%'
};
for (let i = 1; i <= 12; i++) {
  for (let j = 1; j < i; j++) {
    slashPercents[`${j}/${i}`] = `${100*j/i}%`;
  }
}

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
        nunito: 'Nunito, sans-serif',
        jetBrains: 'JetBrains Mono, monospace',
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
        ...ems,
        ...slashPercents,
        ...percents
      },
      gap: {
        ...ems
      },
      borderRadius: {
        ...rems,
        ...ems
      }
    },
  },
  plugins: [],
}

