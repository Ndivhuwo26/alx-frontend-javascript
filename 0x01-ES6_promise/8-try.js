/*
 *Write a function named divideFunction that will accept two arguments: numerator (Number) and denominator (Number).
 */
export default function divideFunction(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error();
    }
    return numerator / denominator;
  } catch (error) {
    throw Error('cannot divide by 0');
  }
}
