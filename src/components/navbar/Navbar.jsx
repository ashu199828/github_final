import React from "react";
import {
  Container,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Navbar() {

  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor:"black"}}>
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton color="inherit">
                <GitHubIcon size="large" />
              </IconButton>
              <Typography
                mx={1}
                sx={{ fontWeight: 700, fontSize: 18, letterSpacing: 2 }}
              >
                OAuth-Application
              </Typography>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}