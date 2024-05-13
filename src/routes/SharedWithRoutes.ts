import express from 'express';
import SharedWithController from '../controllers/SharedWithController';

const router = express.Router();

router.post('/shared', SharedWithController.share);
router.delete('/shared/:shareId', SharedWithController.stopSharing);

module.exports = router;