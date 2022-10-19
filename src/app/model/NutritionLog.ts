import {Meal} from "./Meal";

export interface NutritionLog {
  meals: Meal[];
  totalCalories: string;
  totalProtein: string;
  totalCarbs: string;
  totalFats: string;
}
