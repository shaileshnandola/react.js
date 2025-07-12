const REGISTER_USER = (record) => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      const data = await response.json(); 

      console.log(data);

      dispatch({
        type: "REGISTER",
        payload: data,
      });

    } catch (err) {
      console.log(err);
    }
  };
};

 const LOGIN_USER = (Data) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:8000/user");
      const users = await res.json();

      const User = users.find((u) => u.email === Data.email && u.password === Data.password
      );

      if (User) {
        dispatch({
          type: "LOGIN",
          payload: User,
        });
        alert("Login successful!");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error(err);
    }
  };
};


export { REGISTER_USER,LOGIN_USER };
