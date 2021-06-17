import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

class ChilddProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      searchUser: "",
      selectValue: "firstName",
      todos: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"],
      currentPage: 1,
      todosPerPage: 3,
    };
  }
  searchNewUser = (event) => {
    this.setState({
      searchUser: event.target.value,
    });
    console.log(this.state.searchUser);
  };

  changeValue = (event) => {
    this.setState({
      selectValue: event.target.value,
    });
  };
  //   findUser = () => {
  //     axios
  //       .get(`http://localhost:5000/api/getUserData/${this.state.searchUser}`)
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     console.log(this.state.searchUser);
  //   };
  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  showBack = () => {
    console.log(this.state.currentPage);
  };

  showNext = () => {};
  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.props.data.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
    const renderTodos = currentTodos.map((data, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.email}</td>
          <td>{data.gender}</td>
          <td>{data.dob}</td>
          <td>{data.mobileNo}</td>
          <td>{data.address}</td>
          <td>
            <button
              onClick={() => this.props.deleteData(data._id)}
              style={{
                border: "none",
                color: "red",
                background: "inherit",
              }}
            >
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>
          </td>
          <td>
            <button
              onClick={() => this.props.editData(data._id, index)}
              style={{
                border: "none",
                color: "blue",
                background: "inherit",
              }}
            >
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </button>
          </td>
        </tr>
      );
    });
    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(this.props.data.length / todosPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <span
          style={{ marginLeft: "10px", cursor: "pointer" }}
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </span>
      );
    });
    // const slicePageData = renderPageNumbers.slice(
    //   currentPage - 1,
    //   currentPage + 2
    // );

    return (
      <div>
        <b style={{ marginRight: "20px" }}>Search By</b>
        <select
          value={this.state.selectValue}
          onChange={this.changeValue}
          style={{
            marginleft: "200px",
            marginRight: "20px",
            height: "40px",
            width: "250px",
          }}
        >
          <option value="firstname">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
        </select>
        <input
          type="text"
          value={this.state.searchUser}
          onChange={this.searchNewUser}
        ></input>
        <button
          className="btn btn-primary"
          onClick={() =>
            this.props.findUser(this.state.searchUser, this.state.selectValue)
          }
          style={{ marginLeft: "20px" }}
        >
          Search
        </button>
        {!this.props.searchAllData && (
          <button
            className="btn btn-primary"
            onClick={() => this.props.searchAll()}
            style={{ marginLeft: "20px" }}
          >
            ViewAll
          </button>
        )}
        <table class="table table-striped" style={{ marginTop: "50px" }}>
          <thead style={{ background: "gray", color: "white" }}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Mobile No</th>
              <th scope="col">Address</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>{renderTodos}</tbody>
        </table>
        <button
          id={currentPage - 1}
          onClick={this.handleClick}
          disabled={currentPage < 2}
          className="btn btn-warning"
          style={{ marginLeft: "550px" }}
        >
          PREVIOUS
        </button>{" "}
        {/* <span id={currentPage - 1} onClick={this.handleClick}>
          {pageNumbers[currentPage - 2]}
        </span> */}
        <span
          id={currentPage}
          onClick={this.handleClick}
          style={{ marginLeft: "40px", marginRight: "40px" }}
        >
          {pageNumbers[currentPage - 1]}
        </span>
        {/* <span id={currentPage + 1} onClick={this.handleClick}>
          {pageNumbers[currentPage]}
        </span> */}
        <button
          id={currentPage + 1}
          onClick={this.handleClick}
          disabled={pageNumbers.length < currentPage + 1}
          className="btn btn-success"
        >
          NEXT
        </button>
      </div>
    );
  }
}

export default ChilddProps;
