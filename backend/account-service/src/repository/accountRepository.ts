import Sequelize, {Model, Optional, DestroyOptions} from 'sequelize';
import { IAccount } from '../models/account';
import repository, {IAccountModel} from './accountModel'

function findAll(){
  return repository.findAll<IAccountModel>();
}

function findById (id: number){
  return repository.findByPk<IAccountModel>(id);
}

function addAccount(account: IAccount){
  return repository.create(account);
}

async function updateAccount(id: number, account: IAccount){
  const originalAccount = await repository.findByPk<IAccountModel>(id);
  if(originalAccount != null){
      originalAccount.name = account.name;      
      originalAccount.password = account.password;     
      originalAccount.domain  = account.domain;
      originalAccount.status = account.status;
      await originalAccount.save();
      return originalAccount;
  }
  throw new Error(`Account not found.`);
}

function findByEmail(emailParam: string) {
  return repository.findOne<IAccountModel>({ where: { email: emailParam } });
}

function remove(id: number){
  return repository.destroy({where: {id: id}} as DestroyOptions<IAccount>);
}

function removeByEmail(email: string){
  return repository.destroy({where: {email: email}} as DestroyOptions<IAccount>);
}


export default {findAll, findById, addAccount, updateAccount, findByEmail};