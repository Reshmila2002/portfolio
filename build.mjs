import { mkdir, copyFile, cp, rm } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await rm('dist/about.html', { force: true });
for (const name of ['index.html', 'styles.css', 'script.js']) await copyFile(name, `dist/${name}`);
await cp('assets', 'dist/assets', { recursive: true });
console.log('Built portfolio to dist/');
