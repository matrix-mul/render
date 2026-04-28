import { createSlice } from "@reduxjs/toolkit";
import { resetAll } from "../store/globalAction";

export interface FormDataPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface StepperPage {
  currentStep: number;
  formData: FormDataPayload;
}

const initialState: StepperPage = {
  currentStep: 0,
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

export const formSlice = createSlice({
  name: "stepperForm",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep = Math.min(state.currentStep - 1, 0);
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase(resetAll, state => {
      console.log("Global action triggered");
      return initialState;
    })
  }
});

// Action creators are generated for each case reducer function
export const { nextStep, prevStep, updateFormData, resetForm } =
  formSlice.actions;

export default formSlice.reducer;
