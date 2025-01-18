for(let i = 0 ; i < 5 ; i++){
    let space = " ".repeat(5-i);
    let star = "*".repeat(2*i+1);
    console.log(space,star)
    if(i == 4){
        for(let j = 5 ; j >= 0 ; j--){
            let space = " ".repeat(5-j);
            let star = "*".repeat(2*j+1)
            console.log(space,star)
        }
    }
}