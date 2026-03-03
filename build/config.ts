import type { Config } from 'style-dictionary/types';

const sharedSemanticSources = [
  'tokens/semantic/spacing.json',
  'tokens/semantic/radius.json',
  'tokens/semantic/shadow.json',
];

const componentSources = ['tokens/component/**/*.json'];
const primitiveSources = ['tokens/primitive/**/*.json'];

function createPlatforms(theme: 'light' | 'dark'): Config['platforms'] {
  const suffix = theme === 'light' ? '' : '.dark';
  const cssSelector = theme === 'light' ? ':root' : '[data-theme="dark"]';
  const swiftClassName = theme === 'light' ? 'TokensLight' : 'TokensDark';

  return {
    css: {
      transformGroup: 'css',
      buildPath: `dist/css/`,
      files: [
        {
          destination: `variables${suffix}.css`,
          format: 'css/variables',
          options: {
            selector: cssSelector,
            outputReferences: true,
          },
        },
      ],
    },
    ts: {
      transformGroup: 'js',
      buildPath: `dist/ts/`,
      files: [
        {
          destination: `tokens${suffix}.js`,
          format: 'javascript/es6',
        },
      ],
    },
    ios: {
      transformGroup: 'ios-swift',
      buildPath: `dist/ios/`,
      files: [
        {
          destination: `${swiftClassName}.swift`,
          format: 'ios-swift/class.swift',
          options: {
            className: swiftClassName,
          },
        },
      ],
    },
    android: {
      transformGroup: 'android',
      buildPath: `dist/android/`,
      files: [
        {
          destination: `colors${suffix}.xml`,
          format: 'android/colors',
          filter: { $type: 'color' },
        },
        {
          destination: `dimens${suffix}.xml`,
          format: 'android/dimens',
          filter: { $type: 'dimension' },
        },
      ],
    },
  };
}

export const lightConfig: Config = {
  source: [
    ...primitiveSources,
    'tokens/semantic/color.light.json',
    ...sharedSemanticSources,
    ...componentSources,
  ],
  platforms: createPlatforms('light'),
};

export const darkConfig: Config = {
  source: [
    ...primitiveSources,
    'tokens/semantic/color.dark.json',
    ...sharedSemanticSources,
    ...componentSources,
  ],
  platforms: createPlatforms('dark'),
};
