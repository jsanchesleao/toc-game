import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import Graph from 'react-graph-vis'
import * as data from '../graph.js'


const flowGraph = {
  graph: data.graph,
  options: {
    width: '100%',
    height: '100%',
    nodes: {
      borderWidth: 4,
      size: 30,
      
    },
    layout: {
      hierarchical: {
        direction: "LR"
      }
    },
    interaction: {
      zoomView: false,
      dragView: false
    },
    edges: {
      color: "#000000",
      width: 4,
      length: 200
    }
    
  },
  events: {
    select: ({nodes, edges}) => {
      console.log('Selected nodes: ', nodes)
      console.log('Selected edges:', edges)
    }
  }
}

const FlowGraph = (props) => (
  <Graph graph={flowGraph.graph} options={flowGraph.options} events={flowGraph.events} 
         style={{width: "800px", height:"600px"}}
  />
)

export default (props) => (
  <Card>

    <CardHeader
      title="Workflow"
      subtitle="manage the workers" 
    />

    
    <FlowGraph />
    

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
