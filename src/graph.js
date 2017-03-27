const imgDir = 'http://lorempixel.com/60/60/cats/'

const Node1 = {id: 1, name: 'one'}
const Node2 = {id: 2, name: 'two'}
const Node3 = {id: 3, name: 'three'}
const Node4 = {id: 4, name: 'four'}
const Node5 = {id: 5, name: 'five'}
const Node6 = {id: 6, name: 'six'}
const Node7 = {id: 7, name: 'seven'}
const Node8 = {id: 8, name: 'eight'}
const Node9 = {id: 9, name: 'nine'}

export const grid = [
  [Node1, 'LR', 'LR' , 'LDA', ''  , ''   , Node6, 'LR', 'LR' , 'LDA'],
  [''   , ''  , 'DRA', Node4, 'LR', 'LR' , 'LUA', ''  , ''   , Node8],
  [Node2, 'LR', 'LUD', 'DR' , 'LR', 'LR' , 'LD' , ''  , ''   , ''   ],
  [''   , ''  , 'URA', Node5, 'LD', ''   , 'UR' , 'LR', 'LRA', Node9],
  [Node3, 'LR', 'LR' , 'LUA', 'UR', 'LRA', Node7, 'LR', 'LR' , 'LUA']
]