import { useState, useEffect } from "react";
import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
} from "@material-ui/core";

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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
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
  function Row({ course }) {
    const [openRow, setOpenRow] = useState(false);
    return (
      <React.Fragment>
        <TableRow>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpenRow(!openRow)}
            >
              {openRow ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
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
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={openRow} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Título</TableCell>
                      <TableCell>Descripcion</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {course.topics.map((topic) => (
                      <TableRow>
                        <TableCell>{topic.id}</TableCell>
                        <TableCell>{topic.title}</TableCell>
                        <TableCell>{topic.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <div>
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Gestion Alumno
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <Row key={course.id} course={course} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={showModal} onClose={openModal}>
        <CreateFeedback course={selectedCourse} />
      </Modal>
    </div>
  );
};

export default Student;
