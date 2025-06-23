const adduser = (data) => {

    return {
        type: "ADD_USER",
        payload: data
    }
}
const deleterecord = (id) => {    
    return {
        type: "DELETE_USER",
        payload: id
    }

}

export { adduser, deleterecord };