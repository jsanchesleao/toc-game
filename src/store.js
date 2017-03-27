import { createStore, combineReducers } from 'redux'

import * as graph from './reducers/graphReducer'
import * as factory from './reducers/factoryReducer'

export const initialState = {
  graph: graph.initialState,
  factory: factory.initialState
}


export const store = createStore(combineReducers({
  graph: graph.reducer,
  factory: factory.reducer
}))