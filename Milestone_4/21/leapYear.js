function leapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year, "is a Leap year!");
  } else {
    console.log(year, "is not a Leap year!");
  }
}

leapYear(1933);
leapYear(1952);
leapYear(2000);
leapYear(1800);

// A year may be a leap year if it is evenly divisible by 4. Years that are divisible by 100 (century years such as 1900 or 2000) cannot be leap years unless they are also divisible by 400. (For this reason, the years 1700, 1800, and 1900 were not leap years, but the years 1600 and 2000 were.)
