"use client";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#6F82FF" },
    success: { main: "#18C378", light: "#E6F8F0" },
  },
  components: {
    // Name of the component ⚛️
    MuiPaper: {
      styleOverrides: {
        elevation: {
          boxShadow:
            "0px 2px 1px -1px rgba(111,130,255,0.2), 0px 1px 1px 0px rgba(111,130,255,0.14), 0px 1px 3px 0px rgba(111,130,255,0.12)",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "rgb(148 163 184)",
          "&:hover": {
            backgroundColor: "rgba(80, 70, 239, 0.1)",
            color: "#6F82FF",
            ".MuiSvgIcon-root": {
              color: "#6F82FF",
            },
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          ".MuiSvgIcon-root": {
            color: "rgb(148 163 184)",
          },
        },
      },
    },
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
};
