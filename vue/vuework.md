# vue 环境搭建

## 1.安装node.js-npm

### 安装cnpm

- [镜像站](https://npmmirror.com/)
- 安装命令


  ```bash
  npm install -g cnpm --registry=https://registry.npmmirror.com
  ```

### 安装yarn

```bash

npm install -g yarn
yarn -v
```

## 2.安装vue-cli脚手架

```bash

cnpm install -g @vue/cli
vue -V
```

## 3.创建项目
```bash
vue create vuework
```
## 4.安装element-ui
[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)

[element-plus](https://element-plus.org/zh-CN/component/button.html)
```bash
vue2 安装element-ui
npm i element-ui --save
vue3 安装element-plus
```

全局引入
```js
import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```