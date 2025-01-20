let res = ''
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j <= i ; j++){
        res += (i+j)%2
    }
    res += '\n'
}

console.log(res)
