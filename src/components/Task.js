import React, { useContext } from "react";
import { Button } from "react-bootstrap";
//import { TaskContext } from "../context/TaskContext";

const Task = ({ task }) => {
  //const { deleteTask } = useContext(TaskContext);

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.time}</td>
      <td>
        <Button
          variant="primary"
          className="delete-btn"
          type="button"
          name="delete"
          onClick={() => {
            //deleteTask(task.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default Task;
