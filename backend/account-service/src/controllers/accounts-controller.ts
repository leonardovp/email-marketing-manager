import {NextFunction, Request, Response} from 'express';
import {IAccount} from '../models/account';
import repository from '../repository/accountRepository';
import auth from '../auth';

async function getAccounts(req: Request, res: Response, next: any){
  const accounts : IAccount[] = await repository.findAll();
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
    accountParams.password = auth.hashPassword(accountParams.password);
    const updatedAccount = await repository.updateAccount(accountId, accountParams);
    updatedAccount.password = '';
    res.status(200).json(updatedAccount);


  } catch (error) {
    console.log(`updateAccount: ${error}`);
    res.status(400).end();
  }
}

async function loginAccount(req: Request, res: Response, next: NextFunction){
  try {
    
    const loginParams = req.body as IAccount;

    const account = await repository.findByEmail(loginParams.email);

    if(account != null){
      const isValid = auth.comparePassword(loginParams.password, account.password);
      if(isValid){
        const token = await auth.sign(account.id);
        return res.json({ auth: true, token });
      }

      return res.status(401).end();
    }

  } catch (error) {
    console.log(`loginAccount: ${error}`);
    res.status(400).end();
  }
}

function logoutAccount(req: Request, res: Response, next: NextFunction){
  res.json({ auth: false, token: null });
}

export default {getAccounts, addAccount, getAccountID, updateAccount, loginAccount, logoutAccount};