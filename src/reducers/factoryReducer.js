export const initialState = {
  nodes: {
    '1': {workers: 5, pendingWorkers: [], stock: 22, qa: false},
    '2': {workers: 3, pendingWorkers: [], stock: 20, qa: false},
    '3': {workers: 4, pendingWorkers: [], stock: 35, qa: false},
    '4': {workers: 7, pendingWorkers: [], stock: 18, qa: false},
    '5': {workers: 2, pendingWorkers: [], stock: 5,  qa: false},
    '6': {workers: 6, pendingWorkers: [], stock: 23, qa: false},
    '7': {workers: 9, pendingWorkers: [], stock: 66, qa: false},
    '8': {workers: 2, pendingWorkers: [], stock: 54, qa: false},
    '9': {workers: 3, pendingWorkers: [], stock: 34, qa: false}
  }
}

export const SET_FACTORY_STATE = 'SET_FACTORY_STATE'

export function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_FACTORY_STATE:
      return action.value
    default:
      return state
  }
}