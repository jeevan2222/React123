import "./App.css";
import React, { useState } from "react";
import validation from "./utils/validation";
import axios from "axios";
import Dashboard from "./Dashboard";
function App() {
  // State to manage form inputs
  const [errorMessage, seterrorMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const message = validation(formData);

    if (!message) {
      const createUser = await axios({
        method: "post",
        url: "https://jeevankumarnode.onrender.com/create",
        data: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        },
      });
      const userdata = createUser.data;
      console.log("?????????????", userdata);
    } else {
      seterrorMessage(message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleFormSubmit}>
          <div className="inputdata">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              placeholder="User Name"
            />
            <br />
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <br />
            <p className="error">{errorMessage}</p>
            <button type="submit" className="button button1">
              Register
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
