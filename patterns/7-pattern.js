let res = '';

for(let i = 4 ; i > 0 ; i--){
    for(let j = 0 ; j < 5 ; j++){
        let start = "*".repeat(j);
        let space = " ".repeat(i)
        let str = `${space}${start}${space}`
        res += str
    }
    res += '\n'
}
// console.log(res)

// function generatePattern7() {
//     let res = "";
//     for (let i = 0; i <= 9; i++) { // Outer loop for rows
//         for (let j = 1; j <= i; j++) { // Inner loop for columns
//             if (i % 2 !== 0) {
//                 res += "*";
//             }
//         }
//         res += "\n";
//     }
//     return res;
// }
// console.log(generatePattern7())


console.log(result)