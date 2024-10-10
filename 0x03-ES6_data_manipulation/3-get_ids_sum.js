/*
 * Create a function getStudentIdsSum that returns the sum of all the student ids.
 */
export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, student) => acc + student.id, 0);
}
