/*
 *  Usage: node.js thisfile.js "the sentence you want to evaluate" [option]
 *  If [option] is anything, then words which have multiple entries, such as 
 *  'love' which has entries for both a verb and noun, will be counted twice.
 *  If [option] is absent, words with multiple entries will only be counted once.
 *
 *  Example:
 *  $node.js sentiment_detector.js "I love beans and beans" 
 *  "I love beans and beans" has a score of: 1
 *
 *  $node.js sentiment_detector.js "I love beans and beans" all
 *  "I love beans and beans" has a score of: 2
 */
function getRecordsFromFile(filename, cb) {
    var fs = require("fs");
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            return console.log("---Error---", err); }

        var records = data.split("\n");

        cb(records); }); }

function readDB(filename, cb){
    getRecordsFromFile(filename, function(records){
        var arr = [];

        for (var i in records){
            if (!records[i]) continue; // skip empty lines
            var obj = {};
            var e = records[i].split(" ").map(x => x.split("="));
            for (var i in e) {
                obj[e[i][0]] = e[i][1]; }
            arr.push(obj);
        }
        cb(arr); }); }

readDB("sentimentDict.txt", function(arr){
    var sentence = process.argv.length > 2 ? process.argv[2] : null;   
    if (!sentence) { return; } // end the program if no sentence 

    var sentimentScore = 0,
        words = sentence.split(" ");

    for (var i in words){
        var found = arr.filter(x => x.word1.toLowerCase() === words[i].toLowerCase()); // get the word
        if (!found || found.length === 0) { continue; } // if no word in dict, continue

        if (process.argv.slice(2).length > 1){ // count all entries (love as a noun AND verb)
            found.forEach(x => x.priorpolarity === "positive" ? sentimentScore++ : sentimentScore--); }
        else { // only count one entry per word (only increment for love once even though it's listed twice)
            found[0].priorpolarity === "positive" ? sentimentScore++ : sentimentScore--; } }

    console.log(
        '"' + sentence + '" has a score of: ' + sentimentScore ); });
