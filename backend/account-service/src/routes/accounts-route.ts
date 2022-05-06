import { Router, Request, Response } from "express";
import accountsController from "../controllers/accounts-controller";
import {validadeAccoountSchema, validadeLoginSchema} from './middlewares';
import middlewareCommon from 'ms-commons/api/routes/middlewares'

const router = Router();

router.get('/accounts/', middlewareCommon.validateAuth, accountsController.getAccounts);

router.get('/accounts/:id', middlewareCommon.validateAuth, accountsController.getAccountID);

router.patch('/accounts/:id', middlewareCommon.validateAuth, validadeAccoountSchema, accountsController.updateAccount);

router.post('/accounts/', validadeAccoountSchema, accountsController.addAccount);

router.post('/accounts/login', validadeLoginSchema, accountsController.loginAccount);

router.post('/accounts/logout', middlewareCommon.validateAuth, accountsController.logoutAccount);

export default router;