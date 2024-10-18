import request from 'supertest';
import express, { Application } from 'express';
import { waterJugController } from '../src/controllers/water-jug.controller';


describe('Water Jug Controller', () => {
  let app: Application;
  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/water-jug', waterJugController);
  })

  it('should return the steps for a valid water jug solution', async () => {
    const response = await request(app)
      .post('/api/water-jug/solve')
      .send({ x_capacity: 3, y_capacity: 5, z_amount_wanted: 4 });
    expect(response.status).toBe(200);
    expect(response.body.steps).toHaveLength(6);
    expect(response.body.resume).toContain('Solution found');
  });

  it('should return an error when target amount is greater than both buckets', async () => {
    const response = await request(app)
      .post('/api/water-jug/solve')
      .send({ x_capacity: 3, y_capacity: 5, z_amount_wanted: 10 });

    expect(response.status).toBe(200);
    expect(response.body.resume).toBe('Target amount is greater than both buckets.');
  });

  it('should return an error when there is no solution with the given capacities', async () => {
    const response = await request(app)
      .post('/api/water-jug/solve')
      .send({ x_capacity: 3, y_capacity: 6, z_amount_wanted: 5 });

    expect(response.status).toBe(200);
    expect(response.body.resume).toBe('No solution possible with the given capacities.');
  });
});
