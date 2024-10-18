import { getWaterJugSolution } from '../src/services/water-jug-solver.service';
import { WaterJugSolution, WaterJugParams } from '../src/entities';

describe('Water Jug Service', () => {
  it('should find a solution when the target is reachable', () => {
    const params: WaterJugParams = { bucketCapacityX: 3, bucketCapacityY: 5, targetAmount: 4 };
    const solution: WaterJugSolution = getWaterJugSolution(params);

    expect(solution.steps).not.toBeNull();
    expect(solution.resume).toContain('Solution found');
    expect(solution.steps).toHaveLength(6);
  });

  it('should return an error when target amount is greater than both buckets', () => {
    const params: WaterJugParams = { bucketCapacityX: 3, bucketCapacityY: 5, targetAmount: 10 };
    const solution: WaterJugSolution = getWaterJugSolution(params);

    expect(solution.steps).toBeNull();
    expect(solution.resume).toBe('Target amount is greater than both buckets.');
  });

  it('should return an error when there is no solution with given capacities', () => {
    const params: WaterJugParams = { bucketCapacityX: 3, bucketCapacityY: 6, targetAmount: 5 };
    const solution: WaterJugSolution = getWaterJugSolution(params);

    expect(solution.steps).toBeNull();
    expect(solution.resume).toBe('No solution possible with the given capacities.');
  });
});