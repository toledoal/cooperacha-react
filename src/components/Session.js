import React, { Component } from 'react';
import { update } from '../api';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.value;
        this.change = this.change.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }    

   
    change(event){ 
        this.setState({donors: event.target.innerText}, ()=>{
            this.submitChange();
        });
        
        //this.props.store.dispatch({ type: 'UPDATE_SESSION', session: this.state});
    }
    submitChange(){
        update({id: 'sessions/' + this.props.signedUser.uid + '/' +this.state.key , data:this.state});
    }
    render(){
        const optionsUsers = this.props.users.users.map((user) =>
        <MenuItem key={user.key} value={user.name} primaryText={user.name}></MenuItem>
        );
        const style = {
            height: 300,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
          };
        return(
        <Paper style={style} zDepth={1} rounded={false}>
        <div style={{marginTop:50}}>
        <h1>{this.state.name}</h1>
        <p>Status: {this.state.status ? 'Done' : 'To Be'}</p>
        <p>Date: {this.state.date}</p>
        <div style={{textAlign:'left', display:'flex', justifyContent:'center'}}>
        <SelectField style={{width:170, marginLeft:20}} floatingLabelText="Beer Donor" value={this.state.donors} onChange={this.change}>
        {optionsUsers}
        </SelectField>
        </div>
        </div>
        </Paper>
    )}
  }

  export default Session;