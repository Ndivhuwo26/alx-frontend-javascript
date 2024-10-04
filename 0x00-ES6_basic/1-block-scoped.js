/*
  This function returns an array with two variables [task, task2]
  depending on the trueOrFalse condition
*/
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    if (task && task2) {
      return [task, task2];
    }
  }

  return [task, task2];
}
