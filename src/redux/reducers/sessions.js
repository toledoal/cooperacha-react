
export function sessions(state = [], action) {
    
    switch(action.type){
        case 'ADD_SESSION':
            console.log('Add Session Reducer');
            let newSessionState = addNewSession(state, action);
        return newSessionState;
        case 'GET_SESSIONS':
            console.log('Getting Sessions Reducer');
        return Object.assign([], state, action.sessions);
        case 'UPDATE_SESSION':
            console.log('Update Session Reducer');
            let updateState = updateSession(state, action.session);
        return updateState;
        default: return state;
    }
   
}

function addNewSession(state, action){
    state.push(action.session);
    return state;
}

function updateSession(state, session){
     var newState = state.map((x)=>{ 
         if (x.key === session.key){
             x.donors = session.donors;
         }
         return x;
     });
    return newState;
}