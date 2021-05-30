const addParentApi = ({firstname, lastname, email, password}) => {
  console.log(
    '🚀 ~ file: Parent.js ~ line 2 ~ addParentApi ~ firstname, lastname, email, password',
    firstname,
    lastname,
    email,
    password,
  );

  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve('HTTP_OK'), 4000);
  });
};

export default addParentApi;
