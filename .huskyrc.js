const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'prettier --write "src/**/*.{js,jsx,json,css,vue}"',
      'git add .'
    ])
  }
}