import { Router } from 'express';
import * as NotesController from '../controllers/NotesController';

const router = Router();


router.get('/ping', (req, res) => {
   res.json({ pong: true });
});

router.get('/', NotesController.listNotes);
router.post('/add-note', NotesController.createNote);



export default router;