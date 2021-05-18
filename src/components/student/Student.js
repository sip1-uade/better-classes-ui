import { React, useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import client from "../../client/client";
import CreateFeedback from "./CreateFeedback";

const Student = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const search = async () => {
      const { data } = await client.get("/courses/");
      setCourses(data.courses);
    };
    search();
  }, []);
  const openModal = (course) => {
    setSelectedCourse(course);
    setShowModal(!showModal);
  };
  const renderedRows = courses.map((course) => {
    return (
      <TableRow key={course.id}>
        <TableCell>{course.id}</TableCell>
        <TableCell>{course.title}</TableCell>
        <TableCell>{course.description}</TableCell>
        <TableCell>
          <Button
            color="primary"
            variant="contained"
            onClick={() => openModal(course)}
          >
            Dar Feedback
          </Button>
        </TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Gestion Alumno
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderedRows}</TableBody>
        </Table>
      </TableContainer>
      <Modal open={showModal} onClose={openModal}>
        <CreateFeedback course={selectedCourse}/>
      </Modal>
    </div>
  );
};

export default Student;
