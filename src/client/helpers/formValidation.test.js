import { formValidation } from './formValidation';

describe('test form validation', () => {
  it('test validation when there no data', () => {
    const fakeData = { username: '' };
    expect(formValidation(fakeData)).toEqual({ username: 'please enter username' });
  });
  it('test invalid password', () => {
    const fakeData = { password: '1qaz' };
    expect(formValidation(fakeData)).toEqual({
      password: 'password must contain one uppercase letter, one lowercase letter and one number.',
    });
  });
  it('test invalid length password', () => {
    const fakeData = { password: '12345678' };
    expect(formValidation(fakeData)).toEqual({ password: 'password must contain less then 8 symbols.' });
  });
  it('test invalid length password', () => {
    const fakeData = { username: 'qa' };
    expect(formValidation(fakeData)).toEqual({ username: 'username must contain more than 3 symbols.' });
  });
  it('test psaaword confirmation', () => {
    const fakeData = { password: '1qaA', passwordConfirmation: '1QAa' };
    expect(formValidation(fakeData)).toEqual({ passwordConfirmation: 'passwords are not the same.' });
  });
});
