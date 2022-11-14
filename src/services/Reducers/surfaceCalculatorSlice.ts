import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cylinder from '../../Components/Shapes/cylinder';
import {Shape} from '../../Components/Shapes/shape';
import {RootState} from '../Store/store';

// Define a type for the slice state
export interface SurfaceCalculatorState {
  shapes: Shape[];
  total: number;
}

// Define the initial state using that type
const initialState: SurfaceCalculatorState = {
    shapes: [new Cylinder(10, 20)],
    total: 0
}

export const surfaceCalculatorSlice = createSlice({
  name: 'surfaceCalculator',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    add: (state,  action: PayloadAction<Shape>) => {
      state.shapes.push(action.payload);
    },
    // remove: (state,  action: PayloadAction<Shape>) => {
    //   state.value.(action.payload);
    // },
    // Use the PayloadAction type to declare the contents of `action.payload`
    calculate: (state) => {
      state.shapes.forEach((shape) =>{
        state.total += shape.total()
      } )
    },
  },
})

export const { add, calculate } = surfaceCalculatorSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBolts = (state: RootState) => state.surfaceCalculator

export const surfaceCalculatorActions = surfaceCalculatorSlice.actions

export type SurfaceCalculatorSlice = {
  [surfaceCalculatorSlice.name]: ReturnType<typeof surfaceCalculatorSlice['reducer']>
}