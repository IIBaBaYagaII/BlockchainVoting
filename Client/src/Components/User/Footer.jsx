import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => (
  <>
    <AppBar position="static" component="footer" color="default" >
      <Toolbar style={{ justifyContent: "center",background:"#b1b1b1" }} sx={{position:"absoulute",bottom:"0"}}>
        <Typography variant="caption">©2022</Typography>
      </Toolbar>
    </AppBar>
  </>
);

export default Footer;
