import { Request, Response } from 'express';
import { Note } from '../models/Note';

export const listNotes = async (req: Request, res: Response) => {
   let notes = await Note.findAll();
   if (!notes)
      return res.status(404).json({ error: 'Nenhuma nota encontrada!' });
   return res.status(200).json(notes);
};

export const createNote = async (req: Request, res: Response) => {
   let { title, content,bg_color,text_color } = req.body;

    if (!title || !content) {
        return res
           .status(406)
           .json({ error: 'O campo Tittle e Content são obrigatórios.' });
    }
    
    let newNote = await Note.create({
        title,
        content,
        bg_color,
        text_color,
    });

    return res.status(201).json(newNote);
};
