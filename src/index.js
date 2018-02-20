import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as actions from './redux/actions';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import Store from './redux/store';
import {bindActionCreators} from 'redux';

const mapStateToProps = state => {
  return {
     usersList: state.users,
     sessions: state.sessions
  }
}

const mapDispatchToProps = dispatch => {
  return {
      actions: bindActionCreators(actions, dispatch)
  }
}

const ReduxedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(  <MuiThemeProvider><Provider store={Store}><ReduxedApp store={Store}/></Provider> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();