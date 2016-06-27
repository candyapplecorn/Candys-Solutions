/*
Pig Latin
Translate the provided string to pig latin.
 
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
 
If a word begins with a vowel you just add "way" to the end.
*/

function pigTransform(word){
  var vowels = 'aeiou';
  
  // If we were passed a bad word (empty):
  if (word.length === 0) return word;
  
  // If the word begins with a vowel:
  if (vowels.includes(word[0]))
    return word + "way";
  
  // If the word begins with a consonant:
  var sliceIndex = word.toLowerCase().split('').map(l => vowels.includes(l) ? '1' : '0').indexOf('1');
  /*
  // Regular expressions way to get sliceIndex:
  word.indexOf(word.match(/[aeiou]/gi)[0]);     // returns first match's index
  */
  
  // Technically there's no english word without a vowel, but to be safe:
  if (sliceIndex === -1) return word;
  
  return word.slice(sliceIndex) + word.slice(0, sliceIndex) + "ay";
}

console.log("'hawaii' => ", pigTransform('hawaii'));
console.log("'california' => ", pigTransform('california'));
console.log("'alimoney' => ", pigTransform('alimoney'));
console.log("'zzzzzza' => ", pigTransform('zzzzzza'));

// Why not? lol
function sentence2Pig(sentence){
  return sentence.split(' ').map(x=>pigTransform(x)).join(' ');
}

console.log(sentence2Pig('dude i am a dog and i like jumping on grass'));
