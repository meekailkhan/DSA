const alphabates = ['A','B','C','D','E'];

for(let i = 0 ; i < 4 ; i++){
    let leftStr = '';
    let rightStr = '';
    let space = " ".repeat((5-i))
    for(let j = 0 ; j <= i ; j++){
        leftStr += alphabates[j];
    }
    for(let j = i ; j > 0 ; j--){
        rightStr += alphabates[j-1]
    }
    console.log(space+leftStr+rightStr)
}