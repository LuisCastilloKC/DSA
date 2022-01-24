/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(strs) {
    if(strs === undefined || strs.length === 0) { return ''; }
    
    let len = 200;

    for(let i = 0; i < strs.length; i++) {
        len = Math.min(strs[i].length, len);
    }

    let prefix = '';

    for(let i = 0; i < len; i++){
        let curChar = strs[0][i];

        // if every string has curChar then keep going. otherwise break
        for(let j = 0; j < strs.length; j++){
            if(strs[j][i] !== curChar){
                return prefix;
            }
        }
        // let all Strings Have curChar  = true if it reaches this point
        prefix += curChar;
    }
    return prefix;
};

 //return  -> fl
console.log(longestCommonPrefix(["flower","flow","flight"]))
// return empty string ->  ""
console.log(longestCommonPrefix(["dog","racecar","car"]))