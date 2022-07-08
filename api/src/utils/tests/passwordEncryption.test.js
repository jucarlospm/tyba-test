const passwordEncryption = require('../passwordEncryption');
const password = 'example';

describe('When the function generateCommandID runs', () => {
  it('should generate the token', async () => {
    const result = await passwordEncryption.encryptPassword(password);
    expect(typeof result).toBe('string');
  });
});

describe('When the function comparePassword runs', () => {
  it('should compare the functions', async () => {
    const passwordEncrypt = await passwordEncryption.encryptPassword(password);
    const result = await passwordEncryption.comparePassword(password, passwordEncrypt);
    expect(result).toBe(true);
  });

  it('should show false', async () => {
    const passwordEncrypt = await passwordEncryption.encryptPassword(password);
    const result = await passwordEncryption.comparePassword('fakePassword', passwordEncrypt);
    expect(result).toBe(false);
  });
});