module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@type': './src/@types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
