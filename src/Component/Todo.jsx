import React, { useState } from "react";
import "./stateFun.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
  faTrash,
  faThumbsUp,
  faFastBackward,
} from "@fortawesome/free-solid-svg-icons";
const Todo = () => {
  const [dataenter, setdata] = useState("");
  const [data, updateData] = useState([]);

  const setInput = (event) => {
    setdata(event.target.value);
  };

  const addtask = (event) => {
    setdata(event.target.value);
    console.log(event.target);
    const addData = {
      todo: dataenter,
      complete: false,
    };
    data.push(addData);
  };

  const deletetask = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete your task",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updateItem = data.filter((ele, id) => {
          return index !== id;
        });
        updateData(updateItem);
      }
    });
  };
  const completeTask = (index) => {
    updateData(
      data.map((ele, id) => {
        console.log(id, index);
        if (id === index) {
          return { todo: ele.todo, complete: true };
        } else return ele;
      })
    );
    console.log(data);
  };
  const resumeTask = (index) => {
    updateData(
      data.map((ele, id) => {
        console.log(id, index);
        if (id === index) {
          return { todo: ele.todo, complete: false };
        } else return ele;
      })
    );
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center">Whats your plans for today</h1>
      <div className="inline">
        <input
          type="text"
          value={dataenter}
          onChange={setInput}
          className="form-control  w-25"
        />
        <button onClick={addtask} className="btn btn-success">
          Add
        </button>
      </div>
      <table
        className="table table-striped"
        style={{ border: "2px solid gray" }}
      >
        <thead style={{ background: "black", color: "white" }}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">My task</th>
            <th scope="col">Status</th>
            <th>Remove</th>
          </tr>
        </thead>
        {data.map((task, index) => (
          <tr className={index % 2 === 0 ? "strips" : "none"}>
            <th scope="row">{index + 1}</th>
            <td className={task.complete ? "linet" : "none"}>{task.todo}</td>
            <td>
              {!task.complete ? (
                <button style={{ border: "none" }}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    onClick={() => completeTask(index)}
                  ></FontAwesomeIcon>
                </button>
              ) : (
                <button
                  onClick={() => resumeTask(index)}
                  style={{ border: "none" }}
                >
                  <FontAwesomeIcon icon={faFastBackward}></FontAwesomeIcon>
                </button>
              )}
              {/* <button >
                {task.complete ? "Resume" : "Completed"}
              </button> */}
            </td>
            <td>
              <button
                style={{ color: "red", border: "none" }}
                className="delete"
                onClick={() => deletetask(index)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Todo;
