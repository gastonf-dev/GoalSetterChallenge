import addParentApi from '../src/api/Parent';

describe('Parent', () => {
  test('if firstname starts with error should return a error message', async () => {
    const ERROR_DATA = {
      firstname: 'Error',
      lastname: 'Doe',
      email: 'jdoe@mail.com',
      password: 'secret',
    };
    try {
      const RESULT = await addParentApi(ERROR_DATA);
    } catch (error) {
      expect(error).toMatch('HTTP_ERROR');
    }
  });
  test('if firstname dont start with error should return a success message', async () => {
    const ERROR_DATA = {
      firstname: 'Joe',
      lastname: 'Doe',
      email: 'jdoe@mail.com',
      password: 'secret',
    };
    try {
      const RESULT = await addParentApi(ERROR_DATA);
      expect(RESULT).toMatch('HTTP_ERROR');
    } catch (error) {}
  });
});
