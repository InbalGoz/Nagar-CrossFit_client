import React, { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import backGroundImage from "../assets/p_9.avif";
import { useAppSelector } from "../store/hooks";

const root: Object = {
  minHeight: "100vh",
  backgroundImage: `url(${backGroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
};

const Landing = () => {
  const { user, user_type } = useAppSelector((state) => state.auth);
  const navigation = useNavigate();
  if (user) {
    navigation("/home");
  }
  return (
    <>
      <div style={root}>
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          style={{ minHeight: "100vh" }}
        >
          <Typography
            component='h1'
            variant='h2'
            style={{ fontFamily: "Nunito", color: "white" }}
          >
            Nagar CrossFit
          </Typography>
          <Typography
            component='h1'
            variant='h5'
            style={{ fontFamily: "Nunito", color: "white" }}
          >
            Create a profile , and come train with us.
          </Typography>

          <Grid
            container
            spacing={1}
            direction='row'
            alignItems='center'
            justifyContent='center'
            mt={1}
          >
            <Grid item>
              <Button variant='contained' size='large'>
                <Link
                  to='/register'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign Up
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' size='large'>
                <Link
                  to='/login'
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign In
                </Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Landing;
