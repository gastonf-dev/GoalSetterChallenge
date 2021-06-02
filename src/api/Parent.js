/**
 * @flow stric-local
 * @format
 */
export type PARENT_DATA = {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
};
const addParentApi = ({
  firstname,
  lastname,
  email,
  password,
}: PARENT_DATA): Promise<string> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (firstname.toLowerCase().startsWith('error')){
      reject('HTTP_ERROR')
      } else {
      resolve('HTTP_OK');
      }
    }, 3000)
  });
};

export default addParentApi;
