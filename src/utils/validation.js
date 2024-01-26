// import React from "react";

const validation = (data) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(
    data.password
  );
  const nameRegex = /^[a-zA-Z -]+$/.test(data.name);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);

  if (!nameRegex) return "Please enter Valid Name";
  if (!emailRegex) return "Please enter Valid Email";
  if (!passwordRegex) return "Please enter Valid Password";
  return null;
};

export default validation;
