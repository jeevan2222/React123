import React from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import j from "./public/j.png"; // Change this line

function Dashboard() {
  const location = useLocation();
  const { state } = location;

  if (!state || !state.username) {
    return <div>No valid data</div>;
  }

  const { username } = state;

  return (
    <div>
      <div className="header">
        {" "}
        <img src={j} alt="Description of the image" />
        <h4 className="page">JKINHUB</h4>
      </div>
      <div className="card">
        <h1>Dashboard</h1>

        <h2>
          /// <p>Welcome, {username}!</p>
        </h2>

        <p className="work">
          Work Under Progress <br></br> will back with more features!!!!!!!
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
