let res = '';

for(let i = 5 ; i > 0 ; i--){
    for(let j = 0 ; j < i ; j++){
        res += "*"
    }
    res += '\n'
}

console.log(res)