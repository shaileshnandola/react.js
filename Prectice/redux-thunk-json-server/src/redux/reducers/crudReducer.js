
let initialstate = {
  users: [],
  single: [],
  error: null
}
const crudreducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case 'view':
      return {
        ...state,
        users: action.payload,
        error: null
      }
    case 'viewerror':
      return {
        error: action.payload
      }
    case 'delete':
      const deletuser = state.users.filter((val) => val.id !== action.payload)
      return {
        ...state,
        users: deletuser
      }
    case 'deleteerror':
      return {
        error: action.payload
      }
    case 'edit':
      
      return {
        ...state,
        single: action.payload,
        error: null
      }

    case 'editerror':
      return {
        error: action.payload
      }
      case "update":
        const up=state.users.map((val)=>{
          if(val.id===action.payload){
            return action.payload
          }
          return val
        })
        return{
          ...state,
          users:up
        }
    default:
      return state
  }
}
export default crudreducer;