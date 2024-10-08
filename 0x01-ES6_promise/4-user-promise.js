/*
 * Simple promise,Using the following prototype,That returns a resolved promise with this object.
 */
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;
