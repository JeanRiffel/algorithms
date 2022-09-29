import express, { Request, Response} from 'express';
import Anagram from '../../../entity/anagram/Anagram';
const router = express.Router();

//http://localhost:3000/anagram?firstWord=blue&secondWord=blue
router.get('/anagram', (req: Request, res: Response)=>{
    try{
        const firstWord: string = String(req.query.firstWord);
        const secondWord: string = String(req.query.secondWord);
        console.log(firstWord, secondWord);

        const anagram = new Anagram();
        const isAnagram = anagram.isAnagram(firstWord, secondWord);
        
        res.status(200).send({isAnagram});
    }catch(error){
        res.status(500).send({error: error});
    };    
});

export default router;
