const imgDir = 'http://lorempixel.com/60/60/cats/'

export const graph = {
    nodes: [
      {id: 1,  label: 'Node 1',  shape: 'image', image: imgDir + '1'},
      {id: 2,  label: 'Node 2',  shape: 'image', image: imgDir + '2'},
      {id: 3,  label: 'Node 3',  shape: 'image', image: imgDir + '3'},
      {id: 4,  label: 'Node 4',  shape: 'image', image: imgDir + '4'},
      {id: 5,  label: 'Node 5',  shape: 'image', image: imgDir + '5'},
      {id: 6,  label: 'Node 6',  shape: 'image', image: imgDir + '6'},
      {id: 7,  label: 'Node 7',  shape: 'image', image: imgDir + '7'}
    ],
    edges: [
      {from: 1, to: 4},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 5},
      {from: 4, to: 6},
      {from: 4, to: 7},
      {from: 5, to: 7}
    ]
  }