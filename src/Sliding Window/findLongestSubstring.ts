//! Find the longest substring of a string containing k distinct characters
const findLongestSubstring = (str: string, k: number): string =>{
    if (str === null || str.length === 0) {
      return str;
    }
  
    let begin = 0;
    let end = 0;
  
    let window = new Set<string>();
    let freq = new Array<number>(128).fill(0);
  
    for (let low = 0, high = 0; high < str.length; high++) {
      window.add(str.charAt(high));
      freq[str.charCodeAt(high)]++;
  
      while (window.size > k) {
        if (--freq[str.charCodeAt(low)] === 0) {
          window.delete(str.charAt(low));
        }
  
        low++;
      }
  
      if (end - begin < high - low) {
        end = high;
        begin = low;
      }
    }
  
    return str.substring(begin, end + 1);
  }
  
  // Example usage:
  const str: string = "abcbdbdbbdcdabd";
  const k: number = 2;
  console.log(findLongestSubstring(str, k));