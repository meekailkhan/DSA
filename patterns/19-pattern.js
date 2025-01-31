for(let i = 4 ; i >= 0 ; i--){
    let space = " ".repeat(4-i);
    let str = '';
    for(let j = i ; j >= 0 ; j--){
        str += '*'
    }
    console.log(str+space+space+str)
}

for(let i = 2 ; i <= 5 ; i++){
    let space = " ".repeat(5-i);
    let str = '';
    for(let j = 0 ; j < i ; j++){
        str += '*'
    }
    console.log(str+space+space+str)
}