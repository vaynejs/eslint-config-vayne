/**
 * Vayne Eslint 规则
 * 主要用于vue 和 ng1 项目开发 
 * 使用 babel-eslint 作为解析器 继承 至 standard
 * 'off' or 0 - 关闭规则
 * 'warn' or 1 - 将规则视为一个警告（不会影响退出码）
 * 'error' or 2 - 将规则视为一个错误 (退出码为1)
 */
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  globals: {
  },
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'semi': [2, 'never'],
    'max-len': [2, 200, 2],
    // allow async-await
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'padded-blocks': 0,
    'no-var': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': ['error', {
      'varsIgnorePattern': 'Service|Inject|Injector|Factory|Globar|Controller|[iI]gnored|Module|Directive',
      'caughtErrors': 'none',
      'argsIgnorePattern': '^_',
      'ignoreRestSiblings': true
    }, ],
    'allowEmptyReject': 0
  }
}