import React from 'react'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'

import GraphArea from './GraphArea.js'
import ManagementArea from './ManagementArea.js'

const HeaderBar = () => (
  <AppBar
    title="ToC Game"
    />
)

const Footer = () => (
  <div>
    <p>Developed at B2W Digital</p>
  </div>
)

export default ({state}) => (
  
  <div>
    <HeaderBar />
    <div className="container-fluid">
      <Paper style={{margin: 20}} zDepth={1}>
        <div className="row">
          <div className="col-md-9">
            <GraphArea />
          </div>
          <div className="col-md-3">
            <ManagementArea />
          </div>
        </div>
      </Paper>
    </div>
    <Footer />
  </div>

)