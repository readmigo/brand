import StyleDictionary from 'style-dictionary';
import { lightConfig, darkConfig } from './config.js';

async function build() {
  console.log('Building light tokens...');
  const sdLight = new StyleDictionary(lightConfig);
  await sdLight.buildAllPlatforms();

  console.log('Building dark tokens...');
  const sdDark = new StyleDictionary(darkConfig);
  await sdDark.buildAllPlatforms();

  console.log('Done! Output in dist/');
}

build().catch(console.error);
