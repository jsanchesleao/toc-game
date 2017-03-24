import React from 'react';
import styles from './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlayerArea from './PlayerArea.js'
import {store, initialState} from '../store'

class StatefulApp extends React.Component {
  
  constructor () {
    super()
    this.state = initialState
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  componentWillUnmount () {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
    this.unsubscribe = null
  }

  render () {
    return (<App state={this.state} />)
  }
  
}

const App = ({state}) => (
  <MuiThemeProvider>
    <PlayerArea state={state} />
  </MuiThemeProvider>
);

export default StatefulApp;