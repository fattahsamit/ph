/*
    Show output from 1-50
    if the number is divisible by 3 then instead of the number, show 'foo'
    if the number is divisible by 5 then instead of the number, show 'bar'
    if the number is divisible by both 3 and 5 then instead of the number, show 'foobar'
*/
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 === 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}
