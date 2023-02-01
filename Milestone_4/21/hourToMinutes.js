function toMinutes(hour) {
  return hour * 60;
}
function toSeconds(hour) {
  return hour * 3600;
}

const hour = 2;
const hourToMinutes = toMinutes(hour);
console.log(hourToMinutes);

const hourToSeconds = toSeconds(hour);
console.log(hourToSeconds);
