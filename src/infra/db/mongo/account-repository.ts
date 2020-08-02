import { AddAccountRepository } from '../../../data/repository/add-account-repository'
import { AddAccountRequest } from '../../../data/usecases/add-account-request'
import { AccountModel } from '../../../domain/account/model/account-model'
import { MongoClientHelper } from '../helper/mongo-client.helper';

export class AccountRepository implements AddAccountRepository {

  public async save(account: AddAccountRequest): Promise<AccountModel> {
    const accountCollection = await MongoClientHelper.getCollection('account')
    const result = await accountCollection.insertOne(account)
    return result.ops[0]
  }

}
