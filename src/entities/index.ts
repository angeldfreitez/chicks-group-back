export interface Step {
  step: number;
  bucketX: number;
  bucketY: number;
  action: string;
}

export interface WaterJugSolution {
  steps: Step[] | null;
  resume: string;
}

export interface WaterJugParams {
  bucketCapacityX: number;
  bucketCapacityY: number;
  targetAmount: number;
}