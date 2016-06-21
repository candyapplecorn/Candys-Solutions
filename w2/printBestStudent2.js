var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

/*
AHAHAHAHAHAHAHAHAHAHA
IT'S ALIVVVVVE
*/
function printBestStudent(sts) {
  
  // Attach each student's name to each element in their grades
  // And get an array of just test score objects
  students3.reduce((previous, current) =>
    previous.concat(
      current.grades.map(x => (x.name = current.name, x))
  ), [])
  // Sort/group them by id
  .sort((a, b) => 
        (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
  )
  // sub-sort each group by their scores.
  .sort((a, b) => 
       (a.id !== b.id ? 0 :
       a.score > b.score ? -1 : a.score < b.score ? 1 : 0)
  )
  /* Now the array is ordered by test id; the first
     three elements will be test id 0; those three
     elements will be sorted by their scores */
     
  // Take only the first (highest score) item for each id/group
  .reduce((p, c) => 
    (p[c.id] === undefined ? (p.push(c), p) : p), []
  )
  // And finally, print it out!
  .forEach(
    (e) => console.log("Test " + e.id + ": " + e.name)
  );
  
}

printBestStudent(students3);
