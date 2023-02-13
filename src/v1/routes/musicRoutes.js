import express from 'express';
import musicController from '../controllers/musicController.js';

const router = express.Router();

router.get("/", musicController.index);

router.get("/:id", musicController.show);

router.post("/", musicController.create);

router.patch("/:id", musicController.update);

// router.get("/:id/album", albumController.show);

export default router;