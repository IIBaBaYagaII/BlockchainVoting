import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            margin:'0',
            justifyContent: "center",
            minHeight: "calc(100vh - 128px)",
          }}
        >
         <img src="https://www.onlinemswprograms.com/wp-content/uploads/sites/55/2021/05/How-to-Empower-More-People-to-Vote_hero-p2.jpeg" style={{width:"100%",height:"90%", marginTop:"-4%"}}/>
        </Box>
      </main>
    </ThemeProvider>
  );
}
