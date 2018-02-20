import base from '../../constants/rebase';

//USERS
export function addUser(user) {
    return {
      type: 'ADD_USER',
      user
    }
  }

export function getUsers(users) {
    return {
      type: 'GET_USERS',
      users
    }
  }

//SESSIONS
export function addSession(session) {
    return {
      type: 'ADD_SESSION',
      session
    }
  }

export function updateSession(session) {
    return {
      type: 'UPDATE_SESSION',
      session
    }
  }

  export function getSessions(sessions) {
    return {
      type: 'GET_SESSIONS',
      sessions
    }
  }

  export function createUser(userData) {
    return dispatch =>{ 

        base.post(`users/`, {
            data: userData,
            then(err){
              if(!err){
                console.log('There!');
                //Router.transitionTo('dashboard');
              }
            }
          });

    }
  }