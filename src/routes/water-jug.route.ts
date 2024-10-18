import { Router } from 'express';
import { waterJugController } from '../controllers/water-jug.controller';

const router: Router = Router();

router.post('/solve', waterJugController);

export default router;
