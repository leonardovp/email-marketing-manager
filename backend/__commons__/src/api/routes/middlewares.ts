import { Request, Response, NextFunction } from 'express';
import Joi from "joi";
import auth from '../auth';

function validadeSchema(schema: Joi.ObjectSchema<any>, req: Request, res : Response, next: NextFunction){
  const {error} = schema.validate(req.body);
  if(error == null) return next();

  const {details} = error;
  const message = details.map(item => {
    return item.message;
  }).join(',');

  console.log(message);
  res.status(422).end();
  
}

async function validateAuth(req: Request, res : Response, next: NextFunction){
  try {
    const token = req.headers['x-access-token'] as string;
    
    if(!token) return res.status(401).end();

    const payload = await auth.verifyToken(token);

    if(!payload) return res.status(401).end();

    res.locals.payload = payload;

    next();
    
    
  } catch (error) {
    console.log(`validateAuth: ${error}`);
  }
}

export default {validadeSchema, validateAuth}