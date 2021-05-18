import { useState, useEffect } from "react";
import * as React from "react";
import { Box, Collapse, IconButton, Typography } from "@material-ui/core";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import client from "../../client/client";
import { Link } from "react-router-dom";

const Student = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await client.get("/courses");
      setCourses(data.courses);
    };
    search();
  }, []);

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
                      <TableCell>Feedback</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {course.topics.map((topic) => (
                      <TableRow>
                        <TableCell>{topic.id}</TableCell>
                        <TableCell>{topic.title}</TableCell>
                        <TableCell>{topic.description}</TableCell>
                        <TableCell>
                          <Button component={Link} to={`/feedbacks/${course.id}/${topic.id}`} color="default" variant="outlined">
                                Dar Feedback
                          </Button>
                        </TableCell>
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
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <Row key={course.id} course={course} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Student;
