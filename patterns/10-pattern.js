// for(let i = 0 ; i < 5 ; i++){
//     let star = "*".repeat(i);
//     console.log(star);
//     if(i == 4){
//         for(let j = 5 ; j > 0 ; j--){
//             let star = "*".repeat(j)
//             console.log(star)
//         }
//     }
// }

let res = '';
for(let i = 0 ; i < 5 ; i++){
    for(let j = 0 ; j <= i ; j++){
        res += '*'
    }
    if(i == 4){
        for(let j = 4 ; j > 0 ; j-- ){
            res += "*"
        }
    }
    res += '\n'
}

console.log(res)