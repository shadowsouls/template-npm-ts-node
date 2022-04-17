# ts-node使用模板

该模板使用使用语言为Typescript
该模板主要用于构建Node第三依赖，并且可以上传至npm仓库以供他人使用

## 使用依赖

~~~json
    "@types/jest": "^27.4.1", //测试
    "@types/lodash": "^4.14.181",
    "@types/node": "^16.11.27",
    "jest": "^27.4.1",
    "microbundle": "^0.14.2", //打包工具
    "rimraf": "^3.0.2", //命令行删除
    "ts-jest": "^27.1.4", 
    "typescript": "^4.6.3",
    "typescript-transform-paths": "^3.3.1"
~~~

## 使用注意

你需要修改package.json中的name、、version、author

license可任意修改