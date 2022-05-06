import {Router} from 'express';
import middlewareCommon from 'ms-commons/api/routes/middlewares'
import contactController from '../controllers/contacts-controller'

const router = Router();


  router.get('/contacts/', middlewareCommon.validateAuth, contactController.getContacts);


export default router;