import { Router, Request, Response } from "express";
import accountsController from "../controllers/accounts-controller";
import {validadeAccoount, validadeLogin, validateAuth} from './middlewares'

const router = Router();

router.get('/accounts/', validateAuth, accountsController.getAccounts);

router.get('/accounts/:id', validateAuth, accountsController.getAccountID);

router.patch('/accounts/:id', validateAuth, validadeAccoount, accountsController.updateAccount);

router.post('/accounts/', validadeAccoount, accountsController.addAccount);

router.post('/accounts/login', validadeLogin, accountsController.loginAccount);

router.post('/accounts/logout', validateAuth, accountsController.logoutAccount);

export default router;