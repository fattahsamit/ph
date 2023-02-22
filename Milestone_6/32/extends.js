class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback.`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "web team";
  constructor(name, location) {
    super(name, location);
  }
  developFeature(time) {
    console.log(`Start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web Course Developer";
  team = "dev team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  startSupport(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`Please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job Placement Instructor";
  team = "job team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`Please develop the ${feature}`);
  }
  prepareStudent(version) {
    console.log(`Please release the version ${version}`);
  }
}

const alia = new Developer("Alia Bhatt", "Dhaka", "react");
console.log(alia);
alia.provideFeedback();
alia.startSupport("feature001");

const john = new JobPlacement("John Wick", "Chicago", "USA");
console.log(john);
john.provideFeedback();
