const repo = require('../auth');
const authModel = require('../../models/auth');

jest.mock('../../models/auth', () => {
  return {
    create: jest.fn().mockReturnThis(),
    scan: jest.fn().mockReturnThis(),
    contains: jest.fn().mockReturnThis(),
    exec: jest.fn().mockReturnThis(),
  };
});

const validAuth = {
  endpoint: "/api/example",
  body: {
    example: "hi"
  },
}

describe('When the function getLogout runs', () => {
  it('should throw an error if no id is passed', async () => {
    let result = null;
    try {
      result = await repo.getLogout();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(authModel.exec).toHaveBeenCalledTimes(0);
      expect(result).toBe(null);
    }
  });
});

describe('When the function postLogout runs', () => {
  it('should call to the table if the data are correct', async () => {
    const authSpy = jest.spyOn(authModel, 'create').mockReturnValue(validAuth);
    const result = await repo.postLogout(validAuth);
    expect(authSpy).toHaveBeenCalledTimes(1);
    expect(result).toBe(validAuth);
    authSpy.mockRestore();
  });

  it('should throw an error if no object is passed', async () => {
    let result = null;
    const authSpy = jest.spyOn(authModel, 'create');
    try {
      result = await repo.postLogout();
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(authSpy).toHaveBeenCalledTimes(0);
      expect(result).toBe(null);
    }
  }
  );
});