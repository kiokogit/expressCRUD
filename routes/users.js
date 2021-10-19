import express from 'express';
import { getAllUsers, createUser, getOneUser, deleteUser, modifyDetails } from '../controllers/users.js';

const router = express.Router();

//all routes here are starting with /users by default (because of the defn on index.js)
router.get('/', getAllUsers);

router.post('/', createUser);

router.get('/:id', getOneUser);

router.delete('/:id', deleteUser);

router.patch('/:id', modifyDetails);

export default router;