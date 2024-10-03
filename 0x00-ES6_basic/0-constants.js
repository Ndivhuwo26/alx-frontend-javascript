// Exporting the taskFirst function
// task variable is declared using 'const' because its value won't change
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Exporting the getLast function which returns a string
export function getLast() {
  return ' is okay';
}

// Exporting the taskNext function
// combination variable is declared using 'let' because its value changes later in the function
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast(); // Modifying the value of combination by appending the result of getLast

  return combination;
}
