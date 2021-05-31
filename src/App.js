import React from "react";
import BioData from "./components/BioData";
import BioContextProvider from "./contexts/BioContext";
import { CssBaseline } from "@material-ui/core";

// custom stylings
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },
    palette: {
      primary: {
        main: "#dca523",
      },
      secondary: {
        main: pink[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BioContextProvider>
        <CssBaseline />
        <BioData />
      </BioContextProvider>
    </ThemeProvider>
  );
}

export default App;
