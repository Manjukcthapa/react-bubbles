import React, {useState} from "react";
import axiosWithAuth from "./axiosWithAuth";

// username: Lambda School
// password: i<3Lambd4


const Login = (props) => {
  const [creds, setCreds] = useState({ username: "", password: "" });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = event => {
    setCreds({ ...creds, [event.target.name]: event.target.value });
   
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("/login", creds)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload);
        console.log(res.data.payload)
        props.history.push("/BubblePage");
      })
      .catch(err => console.group(err));
  };
  return (
    <>
    <p>Build a login page here</p>

    <form onSubmit={handleSubmit}>
      <input
        type="type"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        value={creds.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={creds.password}
      />
      <button type="submit">Log In</button>
    </form>
  </>
  );
};

export default Login;
