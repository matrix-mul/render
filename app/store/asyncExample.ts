import { toggle } from "../slice/alertSlice";
import {
  FormDataPayload,
  nextStep,
  prevStep,
  resetForm,
  updateFormData,
} from "../slice/formSlice";
import { FormData } from "../submit/ContactSection";

export const asyncExample = (data: FormData) => (dispatch, getState) => {
  dispatch(toggle(true));
  const state = getState();
  console.log(state);
  setTimeout(() => {
    dispatch(toggle(false));
    const state = getState();
    dispatch(updateFormData(data));
    dispatch(nextStep());
    console.log("After: ", state);
  }, 1000);
};
