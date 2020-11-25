import React, { useContext, useState } from "react";
import { Container, Col, Row, Button, Form, Table } from "react-bootstrap";
import Task from "./Task";
//import { TaskContext } from "../context/TaskContext";

const ProjectPage = (props) => {
  const { project } = props.location.state;
  const [titleTask, setTitleTask] = useState("");
  const [timeTask, setTimeTask] = useState();
  const [isInputWarning, setIsInputWarning] = useState(false);
  //const { addTask, tasks, totalTime } = useContext(TaskContext);

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if (value.length > 0) {
      name === "titleTask" ? setTitleTask(value) : setTimeTask(value);
      setIsInputWarning(false);
    } else {
      console.log("Need to write something");
      setIsInputWarning(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (titleTask.length > 0 && timeTask.length > 0) {
      //addTask(titleTask, timeTask);
      setTitleTask("");
      setTimeTask("");
      setIsInputWarning(false);
    } else {
      setIsInputWarning(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <header className="mt-5 mb-5 text-center">
            <h1>Project: {project.title}</h1>
            <p>Description: {project.description}</p>
            <p>Total Estimated time: {project.totalTime}</p>
          </header>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 6, offset: 3 }}
          className="mt-3"
        >
          <h6 className="mb-3">Write your estimates (in hours) per task</h6>
          <Form onSubmit={handleSubmit} className="mb-5">
            <Form.Row>
              <Col xs={12} sm={9} md={9} lg={9}>
                <Form.Group controlId="titleTaskInput">
                  <Form.Label>Task title:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Task title"
                    name="titleTask"
                    value={titleTask}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={3} md={3} lg={3}>
                <Form.Group controlId="timeTaskInput">
                  <Form.Label>Estimate hours:</Form.Label>
                  <Form.Control
                    type="number"
                    min="0"
                    placeholder="0"
                    name="timeTask"
                    value={timeTask}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              {isInputWarning ? (
                <Col>
                  <p className="small text-muted">Need to fill both fields</p>
                </Col>
              ) : (
                ""
              )}
            </Form.Row>
            <Form.Row>
              <Col xs={12}>
                <Button type="submit">Add your estimates</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          sm={{ span: 10, offset: 1 }}
          md={{ span: 8, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
          className="mt-4"
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Task</th>
                <th>Estimate time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))} */}
              <Task  />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectPage;
