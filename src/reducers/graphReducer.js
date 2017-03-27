export const initialState = {
  display: 'grid'
}

export const DISPLAY_GRID = 'DISPLAY_GRID'
export const DISPLAY_NODE = 'DISPLAY_NODE'

export function reducer(state = initialState, action) {
  switch(action.type) {
    case DISPLAY_GRID: 
      return {...state, display: 'grid'}
    case DISPLAY_NODE:
      return {...state, display: action.node}
    default:
      return state
  }
}