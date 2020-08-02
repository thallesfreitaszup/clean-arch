import { AccountRepository } from '../../infra/db/mongo/account-repository'
import { AccountModel } from '../../domain/account/model/account-model'
import { MongoClientHelper } from '../../infra/db/helper/mongo-client.helper'
import { MongoClient } from 'mongodb'
describe('AddAcountRepository', () => {
  let client: MongoClient
  beforeAll(async() => {
     client = await MongoClientHelper.connect(process.env.MONGO_URL)
  })
  afterAll( async() => {
    await MongoClientHelper.close()
  })
  test(' it should save the account', async () => {
    const accountRepository = new AccountRepository();
    const account = new AccountModel('name','email','password')
    const accountSaved = await accountRepository.save(account)
    expect(accountSaved).toMatchObject({
      name: account.name,
      email: account.email,
      password: account.password,
    })


  })
})
