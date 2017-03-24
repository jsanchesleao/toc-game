import { createStore, combineReducers } from 'redux'

import * as graph from './reducers/graphReducer'

export const initialState = {
  graph: graph.initialState
}


export const store = createStore(combineReducers({
  graph: graph.reducer
}))