// import React, { useState } from "react";
// import "./stateFun.css";
// import axios from "axios";
// import { css } from "@emotion/react";
// import BounceLoader from "react-spinners/ClipLoader";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// function StateFun(props) {
//   const [firstName, setFirstName] = useState(" ");
//   const [lastName, setLastName] = useState(" ");
//   const [email, setEmail] = useState(" ");
//   let [loading, setLoading] = useState(true);
//   let [color, setColor] = useState("#101010");
//   // const increFive = () => {
//   //   setCount((preCount) => preCount + 1);
//   // };
//   // useEffect(() => {
//   //   setCount(props.data);
//   // });
//   const increFive = () => {
//     const data = {
//       name: firstName,
//       salary: lastName,
//       age: email,
//     };
//     console.log(data);
//     axios
//       .post(`http://dummy.restapiexample.com/api/v1/create/${data}`)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log({
//           err: "invalid data",
//         });
//       });
//   };
//   const changeName = (event) => {
//     setFirstName(event.target.value);
//   };
//   const changeNameL = (event) => {
//     setLastName(event.target.value);
//   };
//   const changeEmail = (event) => {
//     setEmail(event.target.value);
//   };
//   return (
//     <div>
//       <input
//         className="input"
//         type="text"
//         value={firstName}
//         onChange={changeName}
//       />
//       <input
//         className="input"
//         type="text"
//         value={lastName}
//         onChange={changeNameL}
//       />
//       <input
//         className="input"
//         type="text"
//         value={email}
//         onChange={changeEmail}
//       />
//       {firstName}
//       <button onClick={increFive}>click me</button>
//       <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
//       <input
//         value={color}
//         onChange={(input) => setColor(input.target.value)}
//         placeholder="Color of the loader"
//       />
//       {1 + 3}
//       <BounceLoader
//         color={"#101010"}
//         loading={loading}
//         css={override}
//         size={60}
//       />
//     </div>
//   );
// }

// // class StateFun extends Component {
// //   constructor() {
// //     super();
// //     this.state = {
// //       count: 0,
// //     };
// //     console.log(this.props.data);
// //   }

// //   increCount = () => {
// //     this.setState((prev) => {
// //       console.log(prev.count);
// //       return {
// //         count: prev.count + 1,
// //       };
// //     });
// //   };

// //   render() {
// //     return (
// //       <>
// //         {/* <h1>new count{this.state.count}</h1>
// //         <button onClick={this.increCount}> Click Me</button>;
// //         {this.posts.map((post, index) => (
// //           <h1>{post.name}</h1>
// //         ))} */}
// //       </>
// //     );
// //   }
// // }

// export default StateFun;
