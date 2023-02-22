const Student = {
  name: "John Cena",
  age: 15,
  class: "Ten",
  marks: {
    math: 78,
    physics: 66,
    chemistry: 74,
  },
};

const marks = Student.marks;
const math = Student.marks.math;
console.log(math);

const chemistry = Student["marks"]["chemistry"];
const subject = "physics";
const subjectMarks = Student.marks[subject];
console.log(chemistry);
console.log(subjectMarks);
