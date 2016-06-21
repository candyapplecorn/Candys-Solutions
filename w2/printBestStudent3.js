/*
Looks like, at least this round,
imperative wins vs functional.
*/
function printBestGrade(students){
  var allgrades  = [], bestgrades = [];

  for (var std of students3){
    for (var grade of std.grades)
      grade.name = std.name;

    allgrades = allgrades.concat(std.grades); 
  }

  for (var cg of allgrades)
    if (bestgrades[cg.id] === undefined || 
        cg.score > bestgrades[cg.id].score)
      bestgrades[cg.id] = cg;

  for (var entry of bestgrades)
    console.log("Test " + entry.id + ": " + entry.name);
}
