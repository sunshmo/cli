import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
  allConfig: js.configs.all, // optional unless you're using "eslint:all"
});

export default [
  js.configs.recommended,
  {
    ignores: ['components', 'projects'],
  },
  // mimic environments
  ...compat.env({
    es2020: true,
    node: true,
  }),
];
