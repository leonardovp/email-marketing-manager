import Sequelize, {Model, Optional} from 'sequelize';
import database from 'ms-commons/data/db';
import { IAccount } from '../models/account';

interface IAccountCreationAttributes extends Optional<IAccount, "id">{}

export interface IAccountModel extends Model<IAccount, IAccountCreationAttributes>, IAccount{}

const repository = database.define<IAccountModel>('tb_account', {
  id:{
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  name:{
    type: Sequelize.STRING(150),
    allowNull: false
  },

  email:{
    type: Sequelize.STRING(150),
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
    type: Sequelize.STRING(100),
    allowNull: true,
  }
})

export default repository