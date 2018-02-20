import axios from 'axios';
import store from '../redux/store';
import base from '../constants/rebase';
//Proper actions referred to the API and not all actions
import { addUser, updateUser, addSession, updateSession, getUsers} from '../redux/actions';

export function add(item) {   
    base.post(item.type, {
        data: item.data,
        then(err){
          if(!err){
            console.log('You saved!' + item.data + "to " + item.type);
            store.dispatch(addUser(item.data));
            //Router.transitionTo('dashboard');
          } 
        }
      });
    store.dispatch(addUser(item.data));
}

export function update(item){
  base.update(item.id, {
    data: item.data
  }).then(() => {
    //Router.transitionTo('dashboard');
    store.dispatch({ type: 'UPDATE_SESSION', session: item.data});

  }).catch(err => {
    //handle error
  });
}

export function addNew(item){
    
        var immediatelyAvailableReference = base.push(item.type, {
          data: item.data
        }).then(newLocation => {
          var generatedKey = newLocation.key;
          console.log(generatedKey)
          if (item.type === 'users/'){
          store.dispatch(addUser(item.data));
          }

          if (item.type === 'sesions/'){
            store.dispatch(addSession(item.data));
            }
        }).catch(err => {
          //handle error
        });
        //available immediately, you don't have to wait for the Promise to resolve
        var generatedKey = immediatelyAvailableReference.key;
     

}

