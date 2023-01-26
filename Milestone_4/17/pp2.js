var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var bang = 99.5;
console.log(math + ", " + bio + ", " + chem + ", " + phy + ", " + bang);

var avg = (math + bio + chem + phy + bang) / 5;
avg = avg.toFixed(2);
avg = parseFloat(avg);
console.log(avg);
