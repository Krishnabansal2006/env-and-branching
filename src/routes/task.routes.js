import { Router } from 'express';
import {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask,
} from '../services/task.service.js';

const router = Router();

router.post('/', async (req, res) => res.status(201).json(await createTask(req.body)));
router.get('/', async (_req, res) => res.json(await getTasks()));
router.get('/:id', async (req, res) => res.json(await getTaskById(req.params.id)));
router.put('/:id', async (req, res) => res.json(await updateTask(req.params.id, req.body)));
router.delete('/:id', async (req, res) => {
    await deleteTask(req.params.id);
    res.status(204).send();
});

export default router;