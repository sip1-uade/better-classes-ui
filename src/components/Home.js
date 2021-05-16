import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
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
    <div>
      <Container className={classes.container}>
        <Typography color="inherit" align="center" variant="h3" marked="center">
          Bienvenido al sistema de info sobre clases virtuales
        </Typography>
        <Button
          component={Link}
          to="universities"
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Entrar como universidad
        </Button>
        <Button
          component={Link}
          to="teachers"
          className={classes.button}
          color="primary"
          variant="contained"
        >
          Entrar como profesor
        </Button>
        <Button
          component={Link}
          to="students"
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
