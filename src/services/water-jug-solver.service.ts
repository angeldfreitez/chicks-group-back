import {Step, WaterJugParams, WaterJugSolution} from '../entities';

function gcd(a: number, b: number): number {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function solveJugProblem(X: number, Y: number, Z: number, prioritizeX: boolean): Step[] {
  const steps:Step[] = [];
  let x:number = 0, y:number = 0, step:number = 0;

  while (x !== Z && y !== Z) {
    step++;

    if (prioritizeX) {
      if (x === 0) {
        x = X;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Fill bucket X' });
      } else if (y === Y) {
        y = 0;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Empty bucket Y' });
      } else {
        const transfer = Math.min(x, Y - y);
        x -= transfer;
        y += transfer;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Transfer from bucket X to Y' });
      }
    }
    else {
      if (y === 0) {
        y = Y;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Fill bucket Y' });
      } else if (x === X) {
        x = 0;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Empty bucket X' });
      } else {
        const transfer = Math.min(y, X - x);
        y -= transfer;
        x += transfer;
        steps.push({ step, bucketX: x, bucketY: y, action: 'Transfer from bucket Y to X' });
      }
    }

    if (x === Z || y === Z) {
      const lastStep = steps[steps.length - 1];
      lastStep.action += ' || SOLVED';
      break;
    }
  }

  return steps;
}

export function getWaterJugSolution(params:WaterJugParams): WaterJugSolution {
  if (params.targetAmount > Math.max(params.bucketCapacityX, params.bucketCapacityY)) return { steps: null, resume: 'Target amount is greater than both buckets.' };
  if (params.targetAmount % gcd(params.bucketCapacityX, params.bucketCapacityY) !== 0) return { steps: null, resume: 'No solution possible with the given capacities.' };

  const stepsStartingWithX = solveJugProblem(params.bucketCapacityX, params.bucketCapacityY, params.targetAmount, true);
  const stepsStartingWithY = solveJugProblem(params.bucketCapacityX, params.bucketCapacityY, params.targetAmount, false);

  const bestSolution = stepsStartingWithX.length <= stepsStartingWithY.length ? stepsStartingWithX : stepsStartingWithY;
  const solutionBucket = bestSolution === stepsStartingWithX ? 'bucketX' : 'bucketY';

  const resume = `Solution found by prioritizing ${solutionBucket}, in ${bestSolution.length} steps. Final state: bucketX=${bestSolution[bestSolution.length - 1].bucketX}, bucketY=${bestSolution[bestSolution.length - 1].bucketY}`;

  return { steps: bestSolution, resume };
}
