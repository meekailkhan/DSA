for(let i = 1 ; i < 5 ; i++){
    let space = " ".repeat(5-i);
    let str = '';
    for(let j = 0 ; j < i ; j++){
        str += '*'
    }
    console.log(str+space+space+str)
}
for(let i = 0 ; i <= 4 ; i++){
    let space = " ".repeat(i);
    let str = '';
    for(let j = i ; j <= 4 ; j++){
        str += '*'
    }
    console.log(str+space+space+str)
}
