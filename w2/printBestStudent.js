/* 
------ Attempt #1 ------
Something is wrong here; I had to reassign/mutate data (best)
Also, this code is darn hard to read.
*/
function buildBestStudents(students, best = []) {
  students3
    .map(x => x.grades)
    .forEach((e, i1, a1) => {
        e.forEach((e, i, a) => {
          if (best[e.id] === undefined || e.score > best[e.id].score)
            best[e.id] = { 
              id: e.id, score: e.score, name: students[i1].name 
            };
        }) 
      });
  return best;
}

function printBestStudent(students){
  buildBestStudents(students)
    .sort((a, b) => a.id - b.id)
    .forEach(
        (e) => 
        console.log("Test " + e.id + ": " + e.name));
}

printBestStudent(students3);
/*
------ End Attempt #1 ------
*/
