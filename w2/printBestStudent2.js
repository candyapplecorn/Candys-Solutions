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
  
  students3.map(
    student => 
      student.grades.map(grades =>
           ({
             id: grades.id, 
             score: grades.score, 
             name: student.name 
           })
      ) 
  )
  .reduce((p, c) => p.concat(c), [])
  .sort((a, b) => 
        (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)
       )
  .sort((a, b) => 
       (a.id !== b.id ? 0 :
       a.score > b.score ? -1 : a.score < b.score ? 1 : 0)
  )
  .reduce((p, c) => 
    (p[c.id] === undefined ? (p.push(c), p) : p), []
  )
  .forEach(
    (e) => 
    console.log("Test " + e.id + ": " + e.name)
  );
  
}

printBestStudent(students3);
