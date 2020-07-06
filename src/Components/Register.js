import React from "react";
import axios from "axios";
function Register() {
  const onSubmit = async e => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password }
    } = e.target;
    let body = {
      email,
      password
    };
    try {
      const response = await axios.post("http://localhost:3000/register", body);
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="pasword">Enter your Password</label>
        <input id="password" name="password" type="password" />

        <button>Send data!</button>
      </form>
    </div>
  );
}

export default Register;
