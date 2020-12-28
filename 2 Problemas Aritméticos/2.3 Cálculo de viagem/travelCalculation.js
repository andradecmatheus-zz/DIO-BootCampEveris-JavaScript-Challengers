const CONSUMPTION = 12;

let line = gets().split(" ");
let hoursTraveled = parseInt(line[0]);
let averageSpeed = parseInt(line[1]);

let fuel = ((hoursTraveled*averageSpeed) / CONSUMPTION).toFixed(3); // Digite aqui o calculo total

console.log(fuel);
