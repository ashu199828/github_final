import React from "react";
import { Button, Container, Box, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import githubProvider from "../../config/authMethods";
import { useContext } from "react";
import TokenContext from "../../context/Token/TokenContext";

export default function Body() {
  const validation = useContext(TokenContext);

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box>
        <Typography
          color="mintcream"
          my={3}
          sx={{ fontSize: 100, fontWeight: 300 }}
        >
          OAuth App with React Relay (GraphQl)
        </Typography>

        <Button
          onClick={() => validation.signInAuth(githubProvider)}
          size="large"
          variant="contained"
          sx={{ fontSize: 18 ,backgroundColor:"black","&:hover":{backgroundColor:"gray",color:"black"}}}
        >
         GitHub Login
          <DoubleArrowIcon />
        </Button>
      </Box>
    </Container>
  );
}
