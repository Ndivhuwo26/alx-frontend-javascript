/*
 * Create a function updateStudentGradeByCity that returns an array of students for a specific city with their new grade
 */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter(student => student.location === city)
    .map(student => {
      let grade = newGrades.find(g => g.studentId === student.id);
      return { ...student, grade: (grade && grade.grade) || 'N/A' };
    });
}
