const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        chrome: '40',
      },
      useBuiltIns: 'entry',
    },
  ],
];

module.exports = { presets };
