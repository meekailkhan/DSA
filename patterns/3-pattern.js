let res = ''

for(let i = 0 ; i <= 5 ; i++){
    for(let j = 1; j <= i ; j++){
        res += j
    }
    res += '\n'
}

console.log(res)