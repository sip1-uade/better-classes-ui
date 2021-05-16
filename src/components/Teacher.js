import React from "react";
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

const data = [
  { id: 1, name: "Curso #1", description: "Primer curso" },
  { id: 2, name: "Curso #2", description: "Segundo curso" },
];
const Teacher = () => {
  const renderedRows = data.map((row) => {
    return (
      <TableRow key={row.id}>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.description}</TableCell>
      </TableRow>
    );
  });
  return (
    <div>
      <Typography color="inherit" align="center" variant="h3" marked="center">
        Gestion Profesor
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderedRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Teacher;
