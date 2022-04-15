import router from './router'
import _ from 'lodash'
import {resolve} from 'path'
const answer= require('the-answer')

// 本文件
export function hello() {
  console.log(`hello`)
}

// 使用import引入项目内其他模块
export function sayRouter() {
  console.log(router)
}

// 使用ESM格式引入第三方依赖
export function lodashHello() {
  console.log(_.floor(4.33))
}

// 引入Node方法
export function resHello(){
  console.log(resolve())
}

// 使用CMD格式引入第三方依赖
export function answerHello(){
  console.log(answer)
}
