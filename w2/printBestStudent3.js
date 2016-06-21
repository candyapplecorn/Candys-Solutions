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

  for (var index in allgrades)
    if (bestgrades[allgrades[index].id] === undefined || 
        allgrades[index].score > bestgrades[allgrades[index].id].score)
      bestgrades[allgrades[index].id] = allgrades[index];

  for (var entry of bestgrades)
    console.log("Test " + entry.id + ": " + entry.name);
}
