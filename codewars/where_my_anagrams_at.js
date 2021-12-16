
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. 
// You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
// Note for Go
// For Go: Empty string slice is expected when there are no anagrams found.



function checkAnagrams(word, words){
    let anagrams = [];

      let splitWord = word.split("").sort().join("")
      for (let i = 0; i < words.length; i++) {
        if (words[i].split("").sort().join("") === splitWord) {
          anagrams.push(words[i])
        }
        
      }
      return anagrams
  }

  console.log(checkAnagrams("baab", ["bbas", "paab", "dodo"]))
  console.log(checkAnagrams("baab", ["bbaa", "paab", "dodo"]))
  console.log(checkAnagrams("baab", ["bbaa", "paab", "dodo", "baba"]))