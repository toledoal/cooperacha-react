const initialState = {
    users: [],
    message:'',
    phoneProfile:{},
    loadRange:0
  };

export function users(state = initialState, action) {
    
    switch(action.type){
        case 'ADD_USER':
            console.log('User Reducer');
            let newState = addNewUser(state, action);
        return newState;
        case 'GET_USERS':
            console.log('Getting Users Data');
            let UsersState = getUsersData(state, action.users);
            console.log(UsersState);
        return Object.assign({}, state, {users: action.users});
        default: return state;
    }
   
}

function addNewUser(state, action){
    state.users.push(action.user);
    return state;
}

function getUsersData(state, users){
    state = users;
    return state;
}


