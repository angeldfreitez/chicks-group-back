import { Request, Response } from 'express';
import { getWaterJugSolution } from '../services/water-jug-solver.service';
import {WaterJugParams} from "../entities";

export const waterJugController = (req: Request, res: Response): void => {
  const { x_capacity, y_capacity, z_amount_wanted } = req.body;

  if (x_capacity === undefined || y_capacity === undefined || z_amount_wanted === undefined) {
    res.status(400).json({ error: 'Missing required fields: x_capacity, y_capacity, and z_amount_wanted are required.' });
    return;
  }

  if (!Number.isInteger(x_capacity) || !Number.isInteger(y_capacity) || !Number.isInteger(z_amount_wanted)) {
    res.status(400).json({ error: 'x_capacity, y_capacity, and z_amount_wanted must be integers.' });
    return;
  }

  if (x_capacity <= 0 || y_capacity <= 0 || z_amount_wanted < 0) {
    res.status(400).json({ error: 'x_capacity and y_capacity must be positive integers and z_amount_wanted must be a non-negative integer.' });
    return;
  }

  const params:WaterJugParams = {
    bucketCapacityX: x_capacity,
    bucketCapacityY: y_capacity,
    targetAmount: z_amount_wanted
  };
  const { steps, resume } = getWaterJugSolution(params);

  res.status(200).json({ steps, resume });
};
