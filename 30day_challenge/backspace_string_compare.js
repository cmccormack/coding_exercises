// Given two strings S and T, return if they are equal when both 
// are typed into empty text editors. # means a backspace character.

/* 
  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac".
*/

var backspaceCompare = function(S, T) {
    // const [a,b] = [S,T].map(v => v.replace(/(\w)?\#/g, ""))
    // // console.log(a,b)
    // return a === b;
    const [a,b] = [S,T].map(v => {
      while (v.includes("#")) {
        v = v.replace(/\w?\#/g, "")
      }
      return v
    })
    console.log(a,b)
};
console.log(backspaceCompare("ab#c", "ad#c"))
console.log(backspaceCompare("a##c", "#a#c"))
console.log(backspaceCompare("a##c", "#a#c"))
