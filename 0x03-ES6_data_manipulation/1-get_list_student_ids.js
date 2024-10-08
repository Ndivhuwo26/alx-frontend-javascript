/*
 * Create a function getListStudentIds that returns an array of ids from a list of object.
 */
export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((student) => student.id);
}
