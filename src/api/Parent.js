/**
 * @flow stric-local
 * @format
 */
type PARENT_DATA = {
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
    return setTimeout(() => resolve('HTTP_OK'), 4000);
  });
};

export default addParentApi;
