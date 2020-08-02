import { Encryptor } from '../../utils/encryptor'
import * as bcrypt from 'bcrypt'
export class BcryptAdapter implements Encryptor {
  private readonly salt
  constructor(salt: number) {
    this.salt = salt
  }
  public async encrypt(password: string): Promise<string> {
    console.log(password, this.salt)
    return await bcrypt.hash(password, this.salt)
  }
}
