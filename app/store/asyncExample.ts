import { loginUser } from "../actions/setCookie";
import { toggle } from "../slice/alertSlice";
import { nextStep, updateFormData } from "../slice/formSlice";
import { loginDataPayload } from "../slice/loginSlice";
import { FormData } from "../submit/ContactSection";
import { submit } from "../slice/loginSlice";
import { redirect } from "next/navigation";
import instance from "../axiosConfig";

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

export const loginValidation = (data: loginDataPayload) => async (dispatch) => {
  const errmess = "";

  const user1 = instance.post("/submit")

  const user = fetch("http://localhost:3000/api/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    // .then(() => {
    //   dispatch(submit(data));
    //   redirect("/stories");
    // })
    .catch((err) => {
      console.log(err);
    });

  // if (user) {
  dispatch(submit(data));
  redirect("/stories");
  // }
};
