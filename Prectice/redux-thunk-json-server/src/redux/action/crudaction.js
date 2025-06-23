const ADD_USER = (record) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:8000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(record)
            })
            const response = await data.json()
            dispatch({
                type: "add",
                payload:response
            })
        } catch (err) {
          dispatch({
            type: 'error',
            payload: err
          })
        }
    }
}
const GET_USER = () => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:8000/users`, {
                method: "GET",
            })
            const response = await data.json()            
            dispatch({
                type: "view",
                payload:response
            })
        } catch (err) {
          dispatch({
            type: 'viewerror',
            payload: err
          })
        }
    }
}
const DELETE_USER = (id) => {
    return async (dispatch) => {
        try {
            const data = await fetch(`http://localhost:8000/users/${id}`, {
                method: "DELETE",
            })
            const response = await data.json()    

                    
            dispatch({
                type: "delete",
                payload:id
            })
        } catch (err) {
          dispatch({
            type: 'deleteerror',
            payload: err
          })
        }
    }
}
const EDIT_USER = (id) => { 

    return async (dispatch) => {
        try {
            
            const data = await fetch(`http://localhost:8000/users/${id}`, {
                method: "GET",
            })
            const response = await data.json()                
            dispatch({
                type: "edit",
                payload:response
            })
        } catch (err) {
          dispatch({
            type: 'editerror',
            payload: err
          })
        }
    }
}
const UPDATE_USER = (record) => { 


    return async (dispatch) => {
        try {
            
            const data = await fetch(`http://localhost:8000/users/${record.id}`, {
                method: "put",
                headers: {"contentype":"aplication/json"},
                body:JSON.stringify(record)
            })
            const response = await data.json()                
          
            dispatch({
                type: "update",
                payload:response
            })
            
        } catch (err) {
          dispatch({
            type: 'editerror',
            payload: err
          })
        }
    }
}

export { ADD_USER,GET_USER,DELETE_USER,EDIT_USER,UPDATE_USER}