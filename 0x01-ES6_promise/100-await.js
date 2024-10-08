/*
 * Import uploadPhoto and createUser from utils.js

Write an async function named asyncUploadUser that will call these two functions and return an object with the
*/
import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }
  return { photo, user };
}
