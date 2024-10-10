/*
 * Create a function named cleanSet that returns a string of all the set values that start with a specific string (startString).
 */
export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let finalString = '';
  set.forEach((element) => {
    if (element && element.startsWith(startString)) finalString += `${element.slice(startString.length)}-`;
  });

  return finalString.slice(0, finalString.length - 1);
}
