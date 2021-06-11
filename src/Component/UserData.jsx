import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import axios from "axios";
import "./stateFun.css";
import ChilddProps from "./ChilddProps";

const UserData = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const [userData, setUserData] = useState([]);
  const [showForm, setForm] = useState(false);
  const [showTable, setTable] = useState(false);
  const [indexNew, setIndex] = useState();

  const [addUser, setAddUser] = useState(true);

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileNoError, setMobileNoError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [searchAll, setSerachAll] = useState(true);

  const newFirstName = (event) => {
    setFirstName(event.target.value);
    let regX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (regX.test(firstName)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };

  const newLastName = (event) => {
    setLastName(event.target.value);
    let regX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (regX.test(lastName)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const newEmail = (event) => {
    setEmail(event.target.value);
    let regX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regX.test(email)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const newGender = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };
  const newDob = (event) => {
    setDob(event.target.value);
  };

  const newMobileNo = (event) => {
    setMobileNo(event.target.value);
    let regX = /^[0-9]{9,10}$/;
    if (regX.test(mobileNo)) {
      setMobileNoError(false);
    } else {
      setMobileNoError(true);
    }
  };
  const newAddress = (event) => {
    setAddress(event.target.value);
    let regX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    if (regX.test(address)) {
      setAddressError(false);
    } else {
      setAddressError(true);
    }
  };
  useEffect(() => {
    if (searchAll === true) {
      axios
        .get("http://localhost:5000/api/getUserData")
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {});
    }
  });
  const submitData = (event) => {
    console.log(firstNameError);
    console.log(lastNameError);
    console.log(emailError);
    console.log(mobileNoError);
    console.log(addressError);
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !mobileNoError &&
      !addressError &&
      firstName &&
      lastName &&
      email &&
      gender &&
      dob &&
      mobileNo &&
      address
    ) {
      const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        dob: dob,
        mobileNo: mobileNo,
        address: address,
      };
      Swal.fire({
        title: "user Added",
        text: "Congrats! user added successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes!",
      });
      axios
        .post("http://localhost:5000/api/insertUserData", newData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      const newUserData = userData.concat(newData);
      setUserData(newUserData);
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setMobileNo("");
      setAddress("");
    } else {
      Swal.fire({
        title: "Invalid data",
        text: "Please enter valid data",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes!",
      });
    }
    event.preventDefault();
  };

  const showFormData = () => {
    setForm(true);
    setTable(false);
  };

  const showTableData = () => {
    setTable(true);
    setForm(false);
  };
  const removeData = (index) => {
    console.log("function call", index);
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete your user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      // if (result.isConfirmed) {
      //   let newData = userData.filter((ele, id) => {
      //     return index !== id;
      //   });
      //   setUserData(newData);
      // }
      axios
        .delete(`http://localhost:5000/api/userData/${index}`)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  const editData = (id, index) => {
    console.log(id, index);
    setFirstName(userData[index].firstName);
    setLastName(userData[index].lastName);
    setEmail(userData[index].email);
    setDob(userData[index].dob);
    setMobileNo(userData[index].mobileNo);
    setAddress(userData[index].address);
    setIndex(id);

    setForm(true);
    setTable(false);
    setAddUser(false);
  };
  const updateData = (event) => {
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !mobileNoError &&
      !addressError
    ) {
      // setUserData(
      //   // userData.map((ele, id) => {
      //   //   if (indexNew === id) {
      //   //     return {
      //   //       firstName: firstName,
      //   //       lastName: lastName,
      //   //       email: email,
      //   //       gender: gender,
      //   //       dob: dob,
      //   //       mobileNo: mobileNo,
      //   //       address: address,
      //   //     };
      //   //   } else return ele;
      //   // })
      // );
      const newData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        gender: gender,
        dob: dob,
        mobileNo: mobileNo,
        address: address,
      };
      axios
        .put(`http://localhost:5000/api/userData/${indexNew}`, newData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setFirstName("");
      setLastName("");
      setEmail("");
      setDob("");
      setMobileNo("");
      setAddress("");
      setAddUser(true);
      setTable(true);
      setForm(false);
      Swal.fire({
        title: "user Updated",
        text: "Congrats! user updated successfully",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes!",
      });
    } else {
      Swal.fire({
        title: "Invalid data",
        text: "Please enter valid data",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes!",
      });
    }
    event.preventDefault();
  };
  const findUser = (userSearch, selectUser) => {
    setSerachAll(false);
    console.log(selectUser);
    axios
      .get(`http://localhost:5000/api/getUserData/${userSearch}/${selectUser}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data[0].firstName);
        if (response.data[0].firstName === "notFound") {
          setSerachAll(true);
          Swal.fire({
            title: "Warning",
            text: "User Not found",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes!",
          });
        }
      })
      .catch((err) => {
        console.log("error" + err);
      });
  };
  const viewAll = () => {
    setSerachAll(true);
    console.log("virew all call");
  };

  return (
    <div className="parentDiv">
      <button
        onClick={showFormData}
        style={{
          margin: "50px 100px",
          padding: "10px 50px",
          color: "white",
          background: "linear-gradient(45deg,blueviolet,#c492f3)",
        }}
      >
        Show Form
      </button>
      <button
        onClick={showTableData}
        style={{
          margin: "50px 100px",
          padding: "10px 50px",
          color: "white",
          background: "linear-gradient(45deg,blueviolet,#c492f3)",
        }}
      >
        Show table
      </button>
      {showForm && (
        <form
          style={{ marginLeft: "30%", marginRight: "auto", marginTop: "-60px" }}
        >
          <table>
            <tr>
              <td
                style={{
                  fontSize: "20px",
                  color: "blue",
                }}
              >
                First Name :
              </td>
              <td>
                <input
                  type="text"
                  value={firstName}
                  onChange={newFirstName}
                  placeholder="First Name"
                  required
                  style={{
                    border: firstNameError ? "2px solid red" : "2px solid blue",
                    outline: "none",
                    marginLeft: "50px",
                  }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>last Name :</td>
              <td>
                <input
                  type="text"
                  value={lastName}
                  onChange={newLastName}
                  placeholder="Last Name"
                  required
                  style={{
                    border: lastNameError ? "2px solid red" : "2px solid blue",
                    outline: "none",
                    marginLeft: "50px",
                  }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>Email : </td>
              <td>
                <input
                  type="text"
                  value={email}
                  onChange={newEmail}
                  placeholder="Email"
                  required
                  style={{
                    border: emailError ? "2px solid red" : "2px solid blue",
                    outline: "none",
                    marginLeft: "50px",
                  }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>Gender : </td>
              <td>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={newGender}
                  style={{ height: "20px", width: "100px" }}
                ></input>
                <label> Male</label>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={newGender}
                  style={{
                    height: "20px",
                    width: "100px",
                  }}
                ></input>
                <label>Female</label>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>Date Of Birth</td>
              <td>
                <input
                  type="date"
                  value={dob}
                  onChange={newDob}
                  style={{ border: "2px solid blue", marginLeft: "50px" }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>
                Mobile Number :{" "}
              </td>
              <td>
                <input
                  type="text"
                  value={mobileNo}
                  onChange={newMobileNo}
                  placeholder="Mobile Number"
                  required
                  style={{
                    border: mobileNoError ? "2px solid red" : "2px solid blue",
                    outline: "none",
                    marginLeft: "50px",
                  }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td style={{ fontSize: "20px", color: "blue" }}>Address :</td>
              <td>
                <input
                  type="text"
                  value={address}
                  onChange={newAddress}
                  placeholder="Address"
                  required
                  style={{
                    border: addressError ? "2px solid red" : "2px solid blue",
                    outline: "none",
                    marginLeft: "50px",
                  }}
                ></input>
              </td>
            </tr>
            <br></br>
            <tr>
              <td colSpan="2">
                {addUser ? (
                  <button onClick={submitData} className="btn btn-primary">
                    submit
                  </button>
                ) : (
                  <button onClick={updateData} className="btn btn-success">
                    Update
                  </button>
                )}
              </td>
            </tr>
          </table>
        </form>
      )}
      {showTable && (
        <ChilddProps
          data={userData}
          name="wasim"
          deleteData={removeData}
          findUser={findUser}
          editData={editData}
          searchAll={viewAll}
          searchAllData={searchAll}
        ></ChilddProps>
      )}
    </div>
  );
};

export default UserData;
