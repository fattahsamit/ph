// Syntactic Sugar
class Instructor {
  name;
  designation = "Web Course Instructor";
  team = "web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupport(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

const aamir = new Instructor("Aamir", "Dhaka");
console.log(aamir);
aamir.startSupport("9:00");
aamir.createQuiz(60);

const solaiman = new Instructor("Solaiman", "Saudi");
console.log(solaiman);
aamir.startSupport("4:00");
aamir.createQuiz(55);
