import { modules } from './data.mjs';
import modulesByVersions from './modules-by-versions.mjs';

const defaults = new Set(modules);

for (const version of Object.values(modulesByVersions)) {
  for (const module of version) defaults.delete(module);
}

fs.writeJson(new URL('../data/modules-by-versions.json', import.meta.url), {
  '4.0': [...defaults],
  ...modulesByVersions,
}, { spaces: '  ' });

// eslint-disable-next-line no-console -- output
console.log(chalk.green('modules-by-versions data rebuilt'));
