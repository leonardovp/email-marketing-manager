import {Request, Response} from 'express';
import {IAccount} from '../models/account';
import repository from '../repository/accountRepository';
import auth from '../auth';


const accounts : IAccount[] = [];

async function getAccounts(req: Request, res: Response, next: any){
  const accounts = await repository.findAll();
  res.json(accounts.map(item =>{
    item.password = '';
    return item;
  }));
}

async function getAccountID(req: Request, res: Response, next: any){
  const idParam = parseInt(req.params.id);
  
  const account = await repository.findById(idParam);
  
  try {
    if(account === null){
      return res.status(404).end();
    }else{
      account.password = '';
      return res.json(account);
    }     
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

}

async function addAccount(req: Request, res: Response, next: any){
  try{
    const newAccount = req.body as IAccount;
    newAccount.password = auth.hashPassword(newAccount.password);
    console.log(newAccount.password);
    const result = await repository.addAccount(newAccount);
    newAccount.password = '';
    newAccount.id = result.id;
    res.status(201).json(newAccount)
  }
  catch(error){
    console.log(error);
    res.status(400).end();
  }
}

async function updateAccount(req: Request, res: Response, next: any){
  try {
    
    const accountId = parseInt(req.params.id);
    const accountParams = req.body as IAccount;

    const updatedAccount = await repository.updateAccount(accountId, accountParams);
    updatedAccount.password = '';
    res.status(200).json(updatedAccount);


  } catch (error) {
    console.log(`updateAccount: ${error}`);
    res.status(400).end();
  }
}

export default {getAccounts, addAccount, getAccountID, updateAccount};