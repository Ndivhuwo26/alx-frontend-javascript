/*
 * Create a function named hasValuesFromArray that returns a boolean if all the elements in the array exist within the set.
 */
export default function hasValuesFromArray(s, arr) {
  for (const i of arr) {
    if (!s.has(i)) {
      return false;
    }
  }
  return true;
}
