function generatePattern5(n) {
  let result = "";

  for (let i = 1; i <= n; i++) { // Outer loop for rows
      let right = "";
      let reverse = "";

      for (let j = 1; j <= i; j++) { // Inner loop for columns
          right += j;
      }

      for (let k = i; k >= 1; k--) { // Inner loop for descending
          reverse += k;
      }
      
      result += right + " ".repeat(2 * (n - i)) + reverse + "\n";
  }
  return result;
}

// console.log(generatePattern5(4))

for(let i = 1 ; i < 5 ; i++){
  let left = '';
  let right = '';
  for(
    // let j = 1 ; j <= i ; j++
    let j = 1; j <= i; j++
  ){
    left += j
  }
  for(
    // let k = i ; k <= 1 ; k--
    let k = i; k >= 1; k--
  ){
    right += k
  }
  console.log(left + ' '.repeat(2* (4 - i)) + right)
}

