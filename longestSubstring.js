var longestSubstring = function(string) {
  let longest = '';
  for (let i = 0; i < string.length; i ++) {
    let sub = `${string[i]}`;
    let j = i + 1;
    while (string[j] && !sub.includes(string[j])) {
      sub += string[j];
      j ++;
    }
    if (sub.length > longest.length) {
      longest = sub;
    }
  }
  return longest.length;
}

let result = longestSubstring('abcabcdabcdeabc');
console.log(result);