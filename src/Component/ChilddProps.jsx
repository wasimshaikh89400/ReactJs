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

  render() {
    return (
      <div>
        <b style={{ marginRight: "20px" }}>Search By</b>
        <select
          value={this.state.selectValue}
          onChange={this.changeValue}
          style={{
            marginleft: "20px",
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
          <tbody>
            {this.props.data.map((data, index) => (
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
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ChilddProps;
