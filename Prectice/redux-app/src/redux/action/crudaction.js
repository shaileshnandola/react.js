const Adduser = (data) => {
  return {
    type: "ADD_USER",
    payload: data
  };
};
const deleteuser = (id) => {
  return {
    type: "DELETE_USER",
    payload: id
  };
};
const edituser = (id) => {  
  return {
    type: "EDIT_USER",
    payload: id
  };
};
const updateuser = (data) => { 
  return {
    type: "UPDATE_USER",
    payload: data
  };
};

export { Adduser, deleteuser,edituser,updateuser };

