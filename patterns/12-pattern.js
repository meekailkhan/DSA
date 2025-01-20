function printPattern(n) {
    for (let i = 1; i <= n; i++) {
      let left = "";
      let middle = "";
      let right = "";
  
      // Left half: increasing numbers
      for (let j = 1; j <= i; j++) {
        left += j;
      }
  
      // Middle repeating part (repeat 'i' - 1 times if row > 1)
      for (let k = 1; k < i; k++) {
        middle += i;
      }
  
      // Right half: decreasing numbers
      for (let j = i; j >= 1; j--) {
        right += j;
      }
  
      // Combine and print
      console.log(left + middle + right);
    }
  }
  
  printPattern(4);
  