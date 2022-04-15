# ts-node使用模板

该模板使用使用语言为Typescript
该模板主要用于构建Node第三依赖，并且可以上传至npm仓库以供他人使用

## 使用依赖

1. "microbundle": "^0.14.2", 该依赖为打包依赖，集成了rollup与tsc的功能
2. "rimraf": "^3.0.2", 该依赖用于build时删除指定文件或目录
3. "lodash": "^4.17.21" 该依赖用于测试该模板能否使用第三方依赖
4. "the-answer": "^1.0.0" 该依赖用于测试模板是否能使用CMD格式的模块使用

## 使用注意

你需要修改package.json中的name、、version、author

license可任意修改