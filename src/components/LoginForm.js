import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const LoginForm = () => {
  const [message, setMessage] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const authenticate = (event) => {
      console.log(data);
    event.preventDefault();
    if (!data.email || !data.password) {
      setMessage("Please fill all required fields");
    } else {
      setMessage("TODO: Making request to backend");
    }
  };

  return (
    <React.Fragment>
      <label className="email">Email</label>
      <input
        type="text"
        className="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <label className="password">Password</label>
      <input
        type={showPass ? "text" : "password"}
        className="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <span
        onClick={(e) => setShowPass(!showPass)}
        style={{ cursor: "pointer" }}
      >
        <span>
          {showPass ? (
            <FontAwesomeIcon icon={faEye} className="customIcon" />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} className="customIcon" />
          )}
        </span>
      </span>
      <button className="submit" onClick={(e) => authenticate(e)}>
        submit
      </button>
      <span
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {message}
      </span>
    </React.Fragment>
  );
};

export default LoginForm;
