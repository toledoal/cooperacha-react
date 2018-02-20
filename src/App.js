import React, { Component } from 'react';
import base, {provider, auth} from './constants/rebase';
import firebase from 'firebase/app';
import SessionAdd from './containers/SessionAdd';
import {addNew} from './api';
import SessionList from './containers/SessionList';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sessions: [], name: '', age: '', user:''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    var self = this;
    firebase.auth().onAuthStateChanged(function(userData) {
      if (userData) {
        console.log(userData.displayName);
        self.setState({ user : userData});
        self.readDb();
      } else {
        console.log("No user is signed in")
      }
    });

  }

  async login() {
    const result = await auth().signInWithPopup(provider)
    this.setState({user: result.user});
  }

  async logout() {
    await auth().signOut()
    this.setState({user: null});
    window.location.href = '/';
  }



  handleSubmit(event) {
    event.preventDefault();
    let duplicate = false;
    this.props.usersList.users.forEach(user=> {
      console.log(user.name);
      if (user.name === this.state.name)
         {duplicate = true;  }
    });
    if (duplicate){
      alert('The name: ' + this.state.name + ' is already taken');
    }else{
      alert('A name was submitted: ' + this.state.name);
      addNew({type: 'users/' + this.state.user.uid + '/', data:{name:this.state.name, age:this.state.age}});
    }
    
  }

componentWillMount(){

}

readDb(){
  base.listenTo('users/' + this.state.user.uid, {
    context: this,
    asArray: true,
    then(usersData){
      this.props.store.dispatch({type: 'GET_USERS',users:usersData});
    }
  });

  base.listenTo('sessions/'+ this.state.user.uid +'/', {
    context: this,
    asArray: true,
    then(sessionsData){
      this.props.store.dispatch({type: 'GET_SESSIONS',sessions:sessionsData});
    }
  });
}

  componentDidMount(){  
  
    
    

  }
      
  handleChangeName(event) {
      this.setState({name: event.target.value});
    }

  handleChangeAge(event) {
      this.setState({age: event.target.value});
    }
    async componentWillMount() {
      const user = auth;
      if(user) this.setState({user})
    }
  
  render() {
    return (
      <div className="App">
      <div className="SignMenu" style={{marginBottom:40, height:60}}>
      <p>{this.state.user ? `Hi, ${this.state.user.displayName}!` : 'Hi!'}</p>
        <RaisedButton primary={true} label="Login with Facebook" onClick={this.login.bind(this)}>
          
        </RaisedButton>

        <RaisedButton onClick={this.logout.bind(this)}>
          Logout
        </RaisedButton>
      </div>

      <SessionList sessions={this.props.sessions} users={this.props.usersList} store={this.props.store} signedUser={this.state.user}></SessionList>
      <Paper>
       <ul style={{listStyle:'none', justifyContent:'center',display:'flex',flexDirection:'row'}}>
       {this.props.usersList.users.map((user) =>
        <li style={{marginRight:40}} key={user.name}>
        {user.name}
        </li>)
        }  
       </ul>
       </Paper>
       <SessionAdd user={this.state.user} users={this.props.usersList}></SessionAdd>
     
       <Paper style={{height:160}}>
       <form onSubmit={this.handleSubmit} style={{paddingTop:15}}>
       <h3 >Add New Donor</h3>
       <TextField floatingLabelText="Donor Name" value={this.state.name} onChange={this.handleChangeName} />
       <TextField floatingLabelText="Amount" value={this.state.age} onChange={this.handleChangeAge} /> 
 
       <RaisedButton type="submit" label="Submit"  primary={true} />
       
       
   
       </form>
       </Paper>

     

      </div>
    );
  
}
}

export default App;
