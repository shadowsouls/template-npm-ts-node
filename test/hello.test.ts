import { sum, answerHello, hello, lodashHello } from "../src";

test('测试sum', () => {
    expect(sum(1, 2)).toBe(3)
})
test('测试hello', () => {
    expect(hello()).toBe('hello')
})
test('测试lodash', () => {
    expect(lodashHello()).toBe(4)
})
test('测试answerHello', () => {
    expect(answerHello()).toBe(42)
})