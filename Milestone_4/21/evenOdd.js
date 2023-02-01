function evenOdd(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    console.log(number, "is Even.");
  } else {
    console.log(number, "is Odd.");
  }
}

evenOdd(303);
evenOdd(1280);
