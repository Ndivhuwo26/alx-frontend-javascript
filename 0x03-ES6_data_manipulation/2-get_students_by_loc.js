/*
 * Create a function getStudentsByLocation that returns an array of objects who are located in a specific city.
 */
export default function getStudentsByLocation(arr, city) {
  return arr.filter((student) => student.location === city);
}
