import { Router, Request, Response } from "express";
import accountsController from "../controllers/accounts-controller";

const router = Router();

router.get('/accounts/', accountsController.getAccounts);

router.post('/accounts/', accountsController.addAccount);

router.get('/accounts/:id', accountsController.getAccountID);

export default router;