import express, { Request, Response } from 'express';
import route  from './routes/route';
const server = express();
const port = 3000;

server.use(route);

server.get('/', (req: Request, res: Response)=>{
    res.status(200).json({status: 'Ok' });
});

server.listen(port, ()=>{
    console.log(`Server is running ${port}`);
});