import { Button, makeStyles, TextField } from "@material-ui/core";
import { React, useState } from "react";
import client from "../../client/client";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
  table: {
    minWidth: 650,
  },
}));

const CreateTopic = ({ course }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState("");

  const onButtonClicked = async (event) => {
    const feedbackBody = { id: course.id, topics: [formData] };
    const response = await client.post("/courses/AddTopic", feedbackBody);
    console.log(response);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className={classes.modal}>
      <h3>Crear Tema</h3>
      <TextField name="Title" label="Nombre" onChange={handleChange} />
      <TextField
        name="Description"
        label="Descripcion"
        onChange={handleChange}
      />
      <Button color="primary" onClick={onButtonClicked}>
        Crear Tema
      </Button>
    </div>
  );
};

export default CreateTopic;
