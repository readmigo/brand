import { cpSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const REPOS = resolve(ROOT, '..');

interface SyncTarget {
  name: string;
  src: string[];
  dest: string;
}

const targets: SyncTarget[] = [
  {
    name: 'ios',
    src: ['dist/ios/TokensLight.swift', 'dist/ios/TokensDark.swift'],
    dest: resolve(REPOS, 'ios/Readmigo/UI/Themes/Generated'),
  },
  {
    name: 'android',
    src: ['dist/android/colors.xml', 'dist/android/colors.dark.xml', 'dist/android/dimens.xml'],
    dest: resolve(REPOS, 'android/app/src/main/res/values/generated'),
  },
  {
    name: 'web',
    src: ['dist/css/variables.css', 'dist/css/variables.dark.css'],
    dest: resolve(REPOS, 'web/src/styles/generated'),
  },
  {
    name: 'dashboard',
    src: ['dist/ts/tokens.js', 'dist/ts/tokens.dark.js'],
    dest: resolve(REPOS, 'dashboard/src/theme/generated'),
  },
  {
    name: 'mobile',
    src: ['dist/ts/tokens.js', 'dist/ts/tokens.dark.js'],
    dest: resolve(REPOS, 'mobile/src/theme/generated'),
  },
];

const targetName = process.argv[2];

for (const target of targets) {
  if (targetName && target.name !== targetName) continue;

  console.log(`Syncing → ${target.name}`);
  mkdirSync(target.dest, { recursive: true });

  for (const src of target.src) {
    const srcPath = resolve(ROOT, src);
    if (!existsSync(srcPath)) {
      console.warn(`  SKIP: ${src} not found (run build:tokens first)`);
      continue;
    }
    const filename = src.split('/').pop()!;
    cpSync(srcPath, resolve(target.dest, filename));
    console.log(`  ${src} → ${target.dest}/${filename}`);
  }
}

console.log('Sync complete.');
