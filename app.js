'use strict';

const memo = new Map()

memo.set(0, 0)
memo.set(1, 1)

function fibo(n) {
    if(memo.has(n)) return memo.get(n)
    const value = fibo(n-2) + fibo(n-1)
    memo.set(n, value)
    return value

}
const length = 40

for(let i = 0; i < length + 1; i++) {
    console.log(fibo(i));
}