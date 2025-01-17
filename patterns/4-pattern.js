let res = ''

for(let i = 0 ; i <= 5 ; i++){
    for(let j = 1; j <= i ; j++){
        res += i
    }
    res += '\n'
}

console.log(res)