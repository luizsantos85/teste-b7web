import { Router } from "express";
import * as NotesController from "../controllers/NotesController";

const router = Router();

router.get("/ping", (req, res) => {
    res.json({ pong: true });
});

router.get("/", NotesController.listNotes);
router.get("/note/:id", NotesController.getNote);
router.post("/note", NotesController.createNote);
router.put("/note/:id", NotesController.updateNote);
router.delete("/note/:id", NotesController.deleteNote);

export default router;
