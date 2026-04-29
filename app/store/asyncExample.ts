import { loginUser } from "../actions/setCookie";
import { toggle } from "../slice/alertSlice";
import {
  nextStep,
  updateFormData,
} from "../slice/formSlice";
import { loginDataPayload } from "../slice/loginSlice";
import { FormData } from "../submit/ContactSection";
import { submit } from "../slice/loginSlice";

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

export const loginValidation =
  (data: loginDataPayload) => async (dispatch) => {
      const res = await loginUser(JSON.stringify(data));
      if(res)
      {
        dispatch(submit(data))
      }
  };
