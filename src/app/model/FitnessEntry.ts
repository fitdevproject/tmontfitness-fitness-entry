import {WorkoutLog} from "./WorkoutLog";
import {NutritionLog} from "./NutritionLog";

export interface FitnessEntry {
  createdAt: Date;
  currentWeight: string;
  workoutLog: WorkoutLog;
  nutritionLog: NutritionLog;
}
