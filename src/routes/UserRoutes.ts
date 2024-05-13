import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users/:userId', UserController.getUserById);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

module.exports = router;