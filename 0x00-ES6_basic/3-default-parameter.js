/*
 *Condense the internals of the following function to 1 line - without changing the name of each function/variable.
 */
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  return initialNumber + (expansion1989 === undefined ? 89 : expansion1989) + (expansion2019 === undefined ? 19 : expansion2019);
}
