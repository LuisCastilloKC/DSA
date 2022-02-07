// Z Algorithm
// The Z-algorithm finds occurrences of a "word" W within a main "text string" T in linear time O(|W| + |T|).

// Given a string S of length n, the algorithm produces an array, Z where Z[i] represents the longest substring starting from S[i] which is also a prefix of S. Finding Z for the string obtained by concatenating the word, W with a nonce character, say $ followed by the text, T, helps with pattern matching, for if there is some index i such that Z[i] equals the pattern length, then the pattern must be present at that point.

// While the Z array can be computed with two nested loops in O(|W| * |T|) time, the following strategy shows how to obtain it in linear time, based on the idea that as we iterate over the letters in the string (index i from 1 to n - 1), we maintain an interval [L, R] which is the interval with maximum R such that 1 ≤ L ≤ i ≤ R and S[L...R] is a prefix that is also a substring (if no such interval exists, just let L = R =  - 1). For i = 1, we can simply compute L and R by comparing S[0...] to S[1...].

// Example of Z array

// Index            0   1   2   3   4   5   6   7   8   9  10  11 
// Text             a   a   b   c   a   a   b   x   a   a   a   z
// Z values         X   1   0   0   3   1   0   0   2   2   1   0 
// Other examples

// str =  a a a a a a
// Z[] =  x 5 4 3 2 1
// str =  a a b a a c d
// Z[] =  x 1 0 2 1 0 0
// str =  a b a b a b a b
// Z[] =  x 0 6 0 4 0 2 0



function buildZArray(zString) {
    // Initiate zArray and fill it with zeros.
    const zArray = new Array(zString.length).fill(null).map(() => 0);
  
    // Z box boundaries.
    let zBoxLeftIndex = 0;
    let zBoxRightIndex = 0;
  
    // Position of current zBox character that is also a position of
    // the same character in prefix.
    // For example:
    // Z string: ab$xxabxx
    // Indices:  012345678
    // Prefix:   ab.......
    // Z box:    .....ab..
    // Z box shift for 'a' would be 0 (0-position in prefix and 0-position in Z box)
    // Z box shift for 'b' would be 1 (1-position in prefix and 1-position in Z box)
    let zBoxShift = 0;
  
    // Go through all characters of the zString.
    for (let charIndex = 1; charIndex < zString.length; charIndex += 1) {
      if (charIndex > zBoxRightIndex) {
        // We're OUTSIDE of Z box. In other words this is a case when we're
        // starting from Z box of size 1.
  
        // In this case let's make current character to be a Z box of length 1.
        zBoxLeftIndex = charIndex;
        zBoxRightIndex = charIndex;
  
        // Now let's go and check current and the following characters to see if
        // they are the same as a prefix. By doing this we will also expand our
        // Z box. For example if starting from current position we will find 3
        // more characters that are equal to the ones in the prefix we will expand
        // right Z box boundary by 3.
        while (
          zBoxRightIndex < zString.length
          && zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
        ) {
          // Expanding Z box right boundary.
          zBoxRightIndex += 1;
        }
  
        // Now we may calculate how many characters starting from current position
        // are are the same as the prefix. We may calculate it by difference between
        // right and left Z box boundaries.
        zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;
  
        // Move right Z box boundary left by one position just because we've used
        // [zBoxRightIndex - zBoxLeftIndex] index calculation above.
        zBoxRightIndex -= 1;
      } else {
        // We're INSIDE of Z box.
  
        // Calculate corresponding Z box shift. Because we want to copy the values
        // from zArray that have been calculated before.
        zBoxShift = charIndex - zBoxLeftIndex;
  
        // Check if the value that has been already calculated before
        // leaves us inside of Z box or it goes beyond the checkbox
        // right boundary.
        if (zArray[zBoxShift] < (zBoxRightIndex - charIndex) + 1) {
          // If calculated value don't force us to go outside Z box
          // then we're safe and we may simply use previously calculated value.
          zArray[charIndex] = zArray[zBoxShift];
        } else {
          // In case if previously calculated values forces us to go outside of Z box
          // we can't safely copy previously calculated zArray value. It is because
          // we are sure that there is no further prefix matches outside of Z box.
          // Thus such values must be re-calculated and reduced to certain point.
  
          // To do so we need to shift left boundary of Z box to current position.
          zBoxLeftIndex = charIndex;
  
          // And start comparing characters one by one as we normally do for the case
          // when we are outside of checkbox.
          while (
            zBoxRightIndex < zString.length
            && zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
          ) {
            zBoxRightIndex += 1;
          }
  
          zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;
  
          zBoxRightIndex -= 1;
        }
      }
    }
  
    // Return generated zArray.
    return zArray;
  }