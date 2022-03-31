import {Request, Response} from 'express';
import {IAccount} from '../models/account';

const accounts : IAccount[] = [];

function getAccounts(req: Request, res: Response, next: any){
  res.json(accounts);
}

function getAccountID(req: Request, res: Response, next: any){
  const idParam = parseInt(req.params.id);
  const index = accounts.findIndex(item => item.id === idParam);
  
  try {
    if(index === -1){
      return res.status(404).end();
    }else{
      return res.status(200).json(accounts[index]);
    }     
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

}

function addAccount(req: Request, res: Response, next: any){
  try{
    const newAccount = req.body as IAccount;
    console.log(req.body);
    accounts.push(newAccount);
    res.status(201).json(newAccount)
  }
  catch(error){
    console.log(error);
    res.status(400).end();
  }
}

export default {getAccounts, addAccount, getAccountID};