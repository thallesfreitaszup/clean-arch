import { SignUpController } from '../../presentation/controller/signup-controller'
import { EmailValidatorAdapter } from '../../presentation/utils/email-validator-adapter'
import { AddAccountUsecaseImpl } from '../../data/usecases/add-account.usecase'
import { AccountRepository } from '../../infra/db/mongo/account-repository'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'

const signUpController =
  new SignUpController(new EmailValidatorAdapter(), new AddAccountUsecaseImpl(new BcryptAdapter(10), new AccountRepository()))

export default signUpController
