"use client";
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    simple: true;
    blackBtn: true
  }
}

import { createTheme } from "@mui/material/styles";

const themeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "simple" },
              style: {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "black",
                "&:hover": {
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                },
                fontSize: "15px",
                padding: "10px 20px",
                minWidth: "6vw",
              },
            },
            {
              props: (props: any) => props.disabled == true && 
              props.variant == "blackBtn"
              ,
              style: {
                minHeight: "7vh",
                backgroundColor: "gray",                
              },
            },
            {
              props: (props: any) => props.disabled == false && 
              props.variant == "blackBtn"
              ,
              style: {
                minHeight: "7vh",
                backgroundColor: "black",
                color: "white"
                
              },
            },
          ],
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
