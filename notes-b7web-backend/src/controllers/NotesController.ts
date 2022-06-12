import { Request, Response } from "express";
import { Note } from "../models/Note";
import { NoteTypes } from "../utils/types/Note";

export const listNotes = async (req: Request, res: Response) => {
    let notes = await Note.findAll();
    if (!notes)
        return res.status(404).json({ error: "Nenhuma nota encontrada!" });

    return res.status(200).json(notes);
};

export const getNote = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;

    let note = await Note.findByPk(id);

    if (!note) return res.status(404).json({ error: "Id não encontrado!" });

    return res.status(200).json(note);
};

export const createNote = async (req: Request, res: Response) => {
    let { title, content, bg_color, text_color }: NoteTypes = req.body;

    if (!title || !content) {
        return res
            .status(406)
            .json({ error: "O campo Tittle e Content são obrigatórios." });
    }

    let newNote = await Note.create({
        title,
        content,
        bg_color,
        text_color,
    });

    return res.status(201).json(newNote);
};

export const updateNote = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let { title, content, bg_color, text_color }: NoteTypes = req.body;

    let note = await Note.findByPk(id);

    if (!note) {
        return res.status(404).json({ error: "Id não encontrado!" });
    }

    if (title) {
        note.title = title;
    }
    if (content) {
        note.content = content;
    }
    if (bg_color) {
        note.bg_color = bg_color;
    }
    if (text_color) {
        note.text_color = text_color;
    }

    note.save();

    return res.status(201).json(note);
};

export const deleteNote = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;

    let note = await Note.findByPk(id);

    if (!note) return res.status(404).json({ error: "Id não encontrado!" });

    await note.destroy();

    return res.status(200).json({});
};
