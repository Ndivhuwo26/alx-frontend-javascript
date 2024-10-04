/*
 * Write a function named createEmployeesObject that will receive two arguments:
 */
export default function createEmployeesObject(departmentName, employees) {
  const employee = { [departmentName]: employees };
  return employee;
}
