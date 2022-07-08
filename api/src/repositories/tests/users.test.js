const repo = require('../users');
const usersModel = require('../../models/users');

jest.mock('../../models/users', () => {
  return {
    create: jest.fn().mockReturnThis(),
    scan: jest.fn().mockReturnThis(),
    contains: jest.fn().mockReturnThis(),
    exec: jest.fn().mockReturnThis(),
  };
});

const email = 'example@tyba.com';
const validUser = {
  email: email,
  firstName: "Juan Carlos",
  lastName: "Peña Merlano",
  password: "1234"
}

describe('When the function getUser runs', () => {
  it('should throw an error if no id is passed', async () => {
    let result = null;
    try {
      result = await repo.getUser();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(usersModel.exec).toHaveBeenCalledTimes(0);
      expect(result).toBe(null);
    }
  });
});

describe('When the function postUser runs', () => {
  it('should call to the table if the data are correct', async () => {
    const userSpy = jest.spyOn(usersModel, 'create').mockReturnValue(validUser);
    const result = await repo.postUser(validUser);
    expect(userSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(validUser);
    userSpy.mockRestore();
  });

  it('should throw an error if no object is passed', async () => {
    let result = null;
    const userSpy = jest.spyOn(usersModel, 'create');
    try {
      result = await repo.postUser();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(userSpy).toHaveBeenCalledTimes(0);
      expect(result).toBe(null);
    }
  });
});