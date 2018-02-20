import React, { Component } from 'react';
import { addNew } from '../api';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

class SessionAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { status:'', name:'', date:'', donors:'' };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeDonors = this.handleChangeDonors.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeStatus(event) {
    this.setState({status: event.target.checked});
  }

  handleChangeDate(event, date) {
    this.setState({date: date});
  }

  handleChangeDonors(event) {
    this.setState({donors: event.target.innerText});
  }

  handleSubmit(event) {
    event.preventDefault();
    addNew({type: 'sessions/' + this.props.user.uid + '/', data: this.state});
  }

  render(){
    const optionsUsers = this.props.users.users.map((user) =>
    <MenuItem key={user.key} value={user.name} primaryText={user.name}></MenuItem>
        );
    return(
      <Paper style={{paddingTop:20}}>
        <h3>Create Event</h3>
      <form onSubmit={this.handleSubmit} style={{paddingBottom:30, display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
     
      <TextField floatingLabelText="Event Title" value={this.state.name} onChange={this.handleChangeName} />
        <SelectField floatingLabelText="Beer Donor" value={this.state.donors} onChange={this.handleChangeDonors}>
        {optionsUsers}
        </SelectField>
        <Checkbox label="Status"  style={{width:150, textAlign:'center'}} value={this.state.status} onCheck={this.handleChangeStatus.bind(this)} /> 
    
       <DatePicker hintText="Event Date" value={this.state.date} onChange={this.handleChangeDate}/>
      <RaisedButton type="submit" label="Create Event"  primary={true} />
      </form>
      </Paper>
    )
  }

}

export default SessionAdd;