import { exercises } from './exercise_Reducer';
import { ui } from './ui_Reducer';
import { currentWorkout } from './currentWorkout_Reducer';
import { combineReducers } from 'redux';

export default combineReducers ({
  exercises,
  ui,
  currentWorkout
})
