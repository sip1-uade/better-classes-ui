import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h3" marked="center">
          Bienvenido al sistema de info sobre clases virtuales
        </Typography>
        <Button
          component={Link}
          to="university"
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Entrar como universidad
        </Button>
        <Button
          component={Link}
          to="professor"
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Entrar como profesor
        </Button>
        <Button
          component={Link}
          to="student"
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Entrar como alumno
        </Button>
      </Container>
    </div>
  );
};

export default Home;
