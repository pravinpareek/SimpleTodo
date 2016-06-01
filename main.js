import React from 'react';
import ReactDOM from 'react-dom';
import {cyan500} from 'material-ui/styles/colors';
import MyAwesomeReactComponent from './App.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const muiTheme = getMuiTheme({
 
  appBar: {
    height: 50,
  },
  fontFamily: 'Roboto, sans-serif',
});
const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>

    <MyAwesomeReactComponent />
 
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'))