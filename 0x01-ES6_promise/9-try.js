/*
 * Write a function named guardrail that will accept one argument mathFunction (Function).
 */
export default function guardrail(mathFunction) {
  const queue = [];
  let res;
  try {
    res = mathFunction();
  } catch (error) {
    res = `Error: ${error.message}`;
  }
  queue.push(res);
  queue.push('Guardrail was processed');

  return queue;
}
