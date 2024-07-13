// .lintstagedrc.js
// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details

const path = require('path')

const buildEslintCommand = (filenames) => {
  console.log(`next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`)
  return `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`
}

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}