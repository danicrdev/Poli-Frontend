/**
 * @link [lint-staged](https://github.com/lint-staged/lint-staged)
 */
export default {
  '*.{js,jsx,less,md,json,html,css}': ['prettier --write'],
  '*.ts?(x)': ['eslint --fix --quiet', 'prettier --parser=typescript --write'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
}