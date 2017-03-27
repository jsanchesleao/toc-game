import React from 'react'
import styles from './Grid.css'

import {DepartmentMiniature} from './Department'

const clickNode = (value, onclick) => function(e) {
  e.preventDefault();
  if (onclick) {
    onclick(value)
  }
}

const getNodeState = function(id, factoryState) {
  return factoryState.nodes[id]
}

const GridNode = (props) => (
  <div onClick={clickNode(props.value, props.onClick)} className={styles.gridCell + ' ' + styles.gridContentCell}>
    <DepartmentMiniature data={props.value} state={getNodeState(props.value.id, props.factory)} />
  </div>
)

const GridCell = ({row, col, data, onClickNode, factory}) => {
  const value = data[row][col]

  switch(value) {
    case 'LD':
      return <div className={styles.gridCell + ' ' + styles.gridLd}></div>
    case 'LDA':
      return <div className={styles.gridCell + ' ' + styles.gridLda}></div>
    case 'LDR':
      return <div className={styles.gridCell + ' ' + styles.gridLdr}></div>
    case 'LDU':
      return <div className={styles.gridCell + ' ' + styles.gridLdu}></div>
    case 'LR':
      return <div className={styles.gridCell + ' ' + styles.gridLr}></div>
    case 'LRA':
      return <div className={styles.gridCell + ' ' + styles.gridLra}></div>
    case 'LRU':
      return <div className={styles.gridCell + ' ' + styles.gridLru}></div>
    case 'LU':
      return <div className={styles.gridCell + ' ' + styles.gridLu}></div>
    case 'LUA':
      return <div className={styles.gridCell + ' ' + styles.gridLua}></div>
    case 'LUD':
      return <div className={styles.gridCell + ' ' + styles.gridLud}></div>
    case 'DR':
      return <div className={styles.gridCell + ' ' + styles.gridDr}></div>
    case 'DRA':
      return <div className={styles.gridCell + ' ' + styles.gridDra}></div>
    case 'UD':
      return <div className={styles.gridCell + ' ' + styles.gridUd}></div>
    case 'UR':
      return <div className={styles.gridCell + ' ' + styles.gridUr}></div>
    case 'URA':
      return <div className={styles.gridCell + ' ' + styles.gridUra}></div>
    case 'URD':
      return <div className={styles.gridCell + ' ' + styles.gridUrd}></div>
    case '':
      return <div className={styles.gridCell + ' ' + styles.gridNull}></div> 
    default:
      return <GridNode value={value} onClick={onClickNode} factory={factory} />
  }

}

const GridRow = (props) => {
  let cols = []
  for (let i = 0; i < props.cols; i++) {
    cols.push(<GridCell data={props.data}
                        row={props.row}
                        col={i}
                        key={i}
                        onClickNode={props.onClickNode}
                        factory={props.factory}
                        />)
  }

  return (
    <div className={styles.gridRow}>
      {cols}
    </div>
  )
}

export default (props) => {
  let rows = []
  for (let i = 0; i < props.rows; i++) {
    rows.push(
      <GridRow data={props.data}
               cols={props.cols}
               row={i}
               key={i}
               onClickNode={props.onClickNode}
               factory={props.factory}
               />
    )
  }

  return (
    <div className={styles.gridContainer}>
      {rows}
    </div>
  )
}