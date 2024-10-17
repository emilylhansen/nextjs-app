"use client";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import React from "react";
// import { ThemeProvider, createTheme } from "@mui/material";
import "@mantine/core/styles.css";
import { createTheme as createTheme_, MantineProvider } from "@mantine/core";

const theme = createTheme_({
  primaryShade: 3,
  colors: {
    primary: [
      "#e8edff",
      "#ced6ff",
      "#9ba9ff",
      "#6479ff",
      "#3750fe",
      "#1b37fe",
      "#092aff",
      "#001de4",
      "#0019cc",
      "#0014b4",
    ],
    success: [
      "#e5fff4",
      "#d2fbe9",
      "#a6f4d2",
      "#77eeba",
      "#51e8a5",
      "#39e598",
      "#29e490",
      "#19ca7c",
      "#04b46d",
      "#009c5c",
    ],
    pink: [
      "#ffe8f4",
      "#ffcfe3",
      "#ff9cc3",
      "#fe65a2",
      "#fd3986",
      "#fd1f74",
      "#fe106b",
      "#e3005a",
      "#cb004f",
      "#b20044",
    ],
    gray: [
      "#edf5ff",
      "#e0e7f1",
      "#c3ccd8",
      "#a4afc0",
      "#8997ab",
      "#78879f",
      "#6e809a",
      "#6e809a",
      "#50617b",
      "#41546f",
    ],
  },
  primaryColor: "primary",
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },
});

// const theme = createTheme({
//   palette: {
//     primary: { main: "#6F82FF" },
//     success: { main: "#18C378", light: "#E6F8F0" },
//   },
//   components: {
//     // Name of the component ⚛️
//     // MuiPaper: {
//     //   styleOverrides: {
//     //     elevation: {
//     //       boxShadow:
//     //         "0px 2px 1px -1px rgba(111,130,255,0.2), 0px 1px 1px 0px rgba(111,130,255,0.14), 0px 1px 3px 0px rgba(111,130,255,0.12)",
//     //     },
//     //   },
//     // },
//     MuiIconButton: {
//       styleOverrides: {
//         root: {
//           color: "rgb(148 163 184)",
//           "&:hover": {
//             backgroundColor: "rgba(80, 70, 239, 0.1)",
//             color: "#6F82FF",
//             ".MuiSvgIcon-root": {
//               color: "#6F82FF",
//             },
//           },
//         },
//       },
//     },
//     MuiBadge: {
//       styleOverrides: {
//         root: {
//           ".MuiSvgIcon-root": {
//             color: "rgb(148 163 184)",
//           },
//         },
//       },
//     },
//   },
// });

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      {/* <ThemeProvider theme={theme}> */}
      <Provider store={store}>{children}</Provider>
      {/* </ThemeProvider> */}
    </MantineProvider>
  );
};
