import {store} from '../store'
import * as Actions from '../reducers/graphReducer'

export const displayNode = function(node) {
  store.dispatch({
    type: Actions.DISPLAY_NODE,
    node: node
  })
}

export const displayGrid = function() {
  console.log('OMG')
  store.dispatch({
    type: Actions.DISPLAY_GRID
  })
}