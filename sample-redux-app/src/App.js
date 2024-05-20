import React from "react";
import "./App.css";
import { Box, List, Typography } from "@mui/material";
import SideMenu from "./components/SideMenu";
import Colors from "./values/Colors";
import MainRouter from "./routers/MainRouter";
// import logo from "./logo.svg";
import logo from "./assets/SEED-Logo.png";

const AppLogo = () => {
  return <Box component="img" src={logo} alt="logo" className="App-logo" />;
};

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "5rem",
            alignItems: "center",
            bgcolor: Colors.secondary,
          }}
        >
          <AppLogo />
        </Box>
        <SideMenu />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          bgcolor: "#cda",
        }}
      >
        <MainRouter />
      </Box>
    </Box>
  );
}

export default App;
