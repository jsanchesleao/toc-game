import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import * as data from '../graph.js'
import Grid from './Grid.js'

import * as graphActions from '../actions/graphActions'


const FlowGraph = (props) => (
  <Grid data={data.grid} 
        rows={5} 
        cols={10} 
        factory={props.factory}
        onClickNode={graphActions.displayNode} />
)

const NodeDisplay = props => (
  <Dialog
    open={props.node !== 'grid'}
    actions={[<FlatButton label="Close" primary={true} onClick={graphActions.displayGrid} />]}>

    {JSON.stringify(props.node)}
    
  </Dialog>
)

export default (props) => (
  <Card>

    <CardHeader
      title="Workflow"
      subtitle="manage the workers" 
    />

    <FlowGraph factory={props.state.factory} />
    <NodeDisplay node={props.state.graph.display} />

    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>

  </Card>
)
