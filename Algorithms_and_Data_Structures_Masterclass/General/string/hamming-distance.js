/*

Hamming Distance
the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other. In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences.

Examples
The Hamming distance between:

"karolin" and "kathrin" is 3.
"karolin" and "kerstin" is 3.
1011101 and 1001001 is 2.
2173896 and 2233796 is 3.

*/

function hammingDistance(a, b) {
    if (a.length !== b.length) {
      throw new Error('Strings must be of the same length');
    }
  
    let distance = 0;
  
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) {
        distance += 1;
      }
    }
  
    return distance;
  }