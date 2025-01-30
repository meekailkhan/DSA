const alphabates = ['A','B','C','D','E'];
for(let i = 5 ; i >= 0 ; i--){
    let res = '';
    for(let j = i ; j <= 4 ; j++){
        res += alphabates[j]+' '
    }
    console.log(res)
}