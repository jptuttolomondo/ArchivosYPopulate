import {Router} from 'express'
export const Route1 = Router();
 import { archivo } from '../files/files.js';
Route1.get("/", async (req, res) => {
   // const { body } = req.body;
   const data= archivo('../src/files/people.json')
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({ payload: data });
  });
  
  