import { Container, makeStyles, Typography } from "@material-ui/core";
import { React, useState } from "react";
import client from "../../client/client";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CreateCourse = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState("");
  const [submited, setSubmited] = useState(false);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const response = await client.post("/courses/CreateCourse", formData);
    console.log(response);
    setSubmited(true);
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <Container>
        <Typography variant="h3" marked="center" align="center">
          Crear Curso
        </Typography>
        <form onSubmit={onSubmitForm} className={classes.form}>
          <label style={{ display: "flex" }}>Titulo</label>
          <input name="title" type="text" onChange={handleChange} />
          <label>Descripcion</label>
          <input name="Description" type="text" onChange={handleChange} />
          <input type="submit" value="Crear" />
        </form>
      </Container>
      {submited && <Redirect to="/universities" />}
    </div>
  );
};

export default CreateCourse;
