/*
Key concepts:
Prototype modification, arrow functions, regular expressions, map (a higher order function).
*/
var sentence = "i am a Proper dog from outerspace and i woof woof woof";

String.prototype.hippify = function() {
  return this
    .split(" ")
    .map(
      w => 
      w.replace(/([^ ]*)([aeiou])([^ ]*)/i, (m, sm1, sm2, sm3) => sm1 + sm3) )
    .join(" ");
};

console.log(sentence.hippify());
console.log("Proper Panther".hippify());
console.log("Proper".hippify());

// Here's the version without arrow functions
/*

String.prototype.hippify = function(){
  return this
    .split(" ")
    .map(
      function(w) { 
      return w.replace(/([^ ]*)([aeiou])([^ ]*)/i, 
                      function(m, sm1, sm2, sm3) { 
                        return sm1 + sm3; }); })
    .join(" ");
};

*/
