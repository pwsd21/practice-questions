import React, { useRef } from "react";

const LoginForm = () => {
  // useRef to store input field values
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Accessing input values using useRef
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    // Perform validation or submit the data
    console.log("Submitted: ", { username, password });

    // Reset the form fields (optional)
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" ref={usernameRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
