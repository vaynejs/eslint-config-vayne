# eslint-config-vayne
> vayne eslint config

## 使用

### Installation
```
yarn add eslint-config-vayne -D
npm i eslint-config-vayne -D
```

### Usage

在项目根目录创建 __.eslintrc.js__ or __.eslintrc__ @see http://eslint.org/docs/user-guide/configuring.

Example __.eslintrc.js__

```js
module.exports = {
  extends: [
    'eslint-config-vayne'
  ],
  rules: {
    
  }
}
```

> 单独使用 vue
```shell
yarn add eslint-plugin-vue eslint-config-vayne  -D
npm i eslint-plugin-vue eslint-config-vayne -D
```

Example __.eslintrc.js__

```js
module.exports = {
  extends: [
    'eslint-config-vayne/vue'
  ],
  rules: {
    
  }
}
```


