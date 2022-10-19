import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import {FitnessEntryService} from "./services/fitness-entry-service";
import {Form, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fitnessEntryForm!: FormGroup

  constructor(private fitnessEntryService: FitnessEntryService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fitnessEntryForm = this.fb.group({
      currentWeight: ['', Validators.required],
      totalCalories: ['',  Validators.required],
      totalProtein: ['', Validators.required],
      totalCarbs: ['', Validators.required],
      totalFats: ['', Validators.required],
      exercises: this.fb.array([]),
      meals: this.fb.array([]),
    });
  }

  //Create form groups associated to a fitness entry

  newExercise(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      sets: ['', Validators.required],
      reps: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  newMeal(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      calories: ['', Validators.required],
      foods: this.fb.array([]),
    });
  }

  newFood(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      servings: ['', Validators.required],
      protein: ['', Validators.required],
      carbs: ['', Validators.required],
      fats: ['', Validators.required],
      calories: ['', Validators.required]
    });
  }

  //functions to add new objects to push to associated arrays
  addMeal() {
    this.meals().push(this.newMeal());
  }

  addExercise() {
    this.exercises().push(this.newExercise());
  }

  addFood(mealIndex: number) {
    console.log(this.foods(mealIndex));
    this.foods(mealIndex).push(this.newFood());
  }

  //Functions to get form arrays
  exercises(): FormArray {
    return this.fitnessEntryForm.get('exercises') as FormArray;
  }
  meals(): FormArray {
    return this.fitnessEntryForm.get('meals') as FormArray;
  }
  foods(mealIndex: number) {
    return this.meals().at(mealIndex).get('foods') as FormArray;
  }

  //Service methods
  addNewEntry() {
    console.log(this.fitnessEntryForm.value);
    // const nLog:NutritionLog = {
    //   meals: this.formMeals.value,
    //   totalCalories: this.fitnessEntryForm.controls["totalCalories"].value,
    //   totalProtein: this.fitnessEntryForm.controls["totalProtein"].value,
    //   totalCarbs: this.fitnessEntryForm.controls["totalCarbs"].value,
    //   totalFats: this.fitnessEntryForm.controls["totalFats"].value
    // }
    //
    // const wLog:WorkoutLog = {
    //   exercises: this.formExercises.value
    // }
    //
    // const fitnessEntry:FitnessEntry = {
    //   createdAt: new Date(),
    //   currentWeight: this.fitnessEntryForm.controls["currentWeight"].value,
    //   workoutLog: wLog,
    //   nutritionLog: nLog
    // }
    //
    // this.fitnessEntryService.addNewFitnessEntry(fitnessEntry)
  }

}
