import Sequelize, {Model, Optional} from 'sequelize';
import database from '../db';
import { IAccount } from '../models/account';

interface AccountCreationAttributes extends Optional<IAccount, "id">{}

export interface AccountModel extends Model<IAccount, AccountCreationAttributes>, IAccount{}

const repository = database.define<AccountModel>('tb_account', {
  id:{
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name:{
    type: Sequelize.STRING(200),
    allowNull: false
  },

  email:{
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  password:{
    type: Sequelize.STRING,
    allowNull: false
  }
  ,
  status:{
    type: Sequelize.SMALLINT.UNSIGNED,
    allowNull: false,
    defaultValue: 100
  },

  domain:{
    type: Sequelize.STRING,
    allowNull: true,
  }
}) 

function findAll(){
  return repository.findAll<AccountModel>();
}

function findById (id: number){
  return repository.findByPk<AccountModel>(id);
}

function addAccount(account: IAccount){
  return repository.create(account);
}

async function updateAccount(id: number, account: IAccount){
  const originalAccount = await repository.findByPk<AccountModel>(id);
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

export default {findAll, findById, addAccount, updateAccount};