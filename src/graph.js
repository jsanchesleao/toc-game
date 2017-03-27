const imgDir = 'http://lorempixel.com/60/60/cats/'

const Node1 = {name: 'one'}
const Node2 = {name: 'two'}
const Node3 = {name: 'three'}
const Node4 = {name: 'four'}
const Node5 = {name: 'five'}
const Node6 = {name: 'six'}
const Node7 = {name: 'seven'}
const Node8 = {name: 'eight'}
const Node9 = {name: 'nine'}

export const grid = [
  [Node1, 'LR', 'LR' , 'LDA', ''  , ''   , Node6, 'LR', 'LR' , 'LDA'],
  [''   , ''  , 'DRA', Node4, 'LR', 'LR' , 'LUA', ''  , ''   , Node8],
  [Node2, 'LR', 'LUD', 'DR' , 'LR', 'LR' , 'LD' , ''  , ''   , ''   ],
  [''   , ''  , 'URA', Node5, 'LD', ''   , 'UR' , 'LR', 'LRA', Node9],
  [Node3, 'LR', 'LR' , 'LUA', 'UR', 'LRA', Node7, 'LR', 'LR' , 'LUA']
]