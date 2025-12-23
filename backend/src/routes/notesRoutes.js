import express from 'express';
import {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);

router.post("/", createNote);

//dynamic value to know which note to delete using the ID
router.put("/:id", updateNote);

//same here, delete using ID
router.delete("/:id", deleteNote);

export default router;