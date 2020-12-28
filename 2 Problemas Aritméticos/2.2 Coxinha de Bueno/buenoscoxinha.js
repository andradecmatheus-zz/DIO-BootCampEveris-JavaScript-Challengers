let line = gets().split(" ");
let totalCoxinhas = parseInt(line[0]);
let totalParticipants = parseInt(line[1]);

let average = (totalCoxinhas / totalParticipants).toFixed(2);

console.log(average);
