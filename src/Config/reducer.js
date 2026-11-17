const initialState = {
    users:[ 
        { id: 1, name: "Mohamed Allaoui", email: "allaoui@gmail.com" }, 
        { id: 2, name: "Hind Benanni", email: "benani@gmail.com" }
    ] 
};
const reducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_user":
            return {...state, users:[...state.users, action.payload]}
        case "Update_user":
            return {...state, users: state.users.map((u)=>u.id===parseInt(action.payload.id)
                ? {...u, name: action.payload.name, email: action.payload.email}
                : u)}
        case "Delete_user":
            return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}
        default:
            return state
    }
}
export default reducer