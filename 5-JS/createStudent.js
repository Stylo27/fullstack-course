function createStudent(name, age, grades = []) {
  return {
    name: name,
    age: age,
    grades: grades
  };
}

function printData(student) {
  console.log('name', student.name);
  console.log('age', student.age);
  console.log('grandes', student.grades);
}

function calculateAverageGrade(grades = []) {
  let result = null
  if (grades.length >= 3) {
    result = grades.reduce((a, b) => a + b, 0) / grades.length;
  }
  console.log(result);
}

let student = createStudent('Anton', 29, [5,5,5])
console.log(student);

printData(student);
calculateAverageGrade(student.grades)




