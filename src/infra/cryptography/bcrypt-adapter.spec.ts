import * as bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'
describe('Bcrypt Adapter',  () => {
  test('', async () => {
    const encryptor = new BcryptAdapter(10)
    const spy = jest.spyOn(bcrypt, 'hash')

    await encryptor.encrypt('password')
    await expect(spy).toBeCalledWith('password', 10)
  })
})
