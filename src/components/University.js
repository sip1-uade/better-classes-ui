import { React, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
} from "@material-ui/core";
import client from "../client/client";

const University = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await client.get("api/courses/");
      setCourses(data.courses);
    };
    search();
  }, []);
  const renderedRows = courses.map((course) => {
    return (
      <TableRow key={course.id}>
        <TableCell>{course.id}</TableCell>
        <TableCell>{course.title}</TableCell>
        <TableCell>{course.description}</TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Gestion Universidades
      </Typography>
      <Button color="primary" variant="contained">
        Agregar Curso
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descripcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderedRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default University;
