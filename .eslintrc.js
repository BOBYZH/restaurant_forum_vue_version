module.exports = {
  extends: [
    // 在這裡可以添加你想要使用的風格規範，例如：
    // 'eslint:recommended',
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    // 在這裡可以針對特定的規則進行覆蓋或添加，例如
    // 'vue/no-unused-vars': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}
