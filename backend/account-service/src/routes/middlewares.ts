import { Request, Response, NextFunction } from 'express';
import Joi from "joi";
import {accountSchema, loginSchema, accountUpdateSchema} from '../models/accountSchemas';
import middlewareCommon from 'ms-commons/api/routes/middlewares';


function validadeAccoountSchema(req: Request, res : Response, next: NextFunction){
  return middlewareCommon.validadeSchema(accountSchema, req, res, next);
}

function validadeLoginSchema(req: Request, res : Response, next: NextFunction){
  return middlewareCommon.validadeSchema(loginSchema, req, res, next);
}

export {validadeAccoountSchema, validadeLoginSchema}