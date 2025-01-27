const alphabates = ['A','B','C','D','E'];

for(let i = 5 ; i >= 0 ; i--){
    let str = '';
    for(let j = 0 ; j < i ; j++){
        str += alphabates[j]
    }
    console.log(str)
}