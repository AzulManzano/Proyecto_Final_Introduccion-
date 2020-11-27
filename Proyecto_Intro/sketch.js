const buffer1 =[]
const buffer2 =[]

const w = 8
const h = 8

let rectW = 0
let rectH = 0

function setup() {
  const canvas = createCanvas(500, 500);

  for(let i = 0; i< h ; i++){
    const row1 = []
    const row2 = []
    for(let j = 0; j< w ; j++){
      if(Math.random() > 0.5){
        row1.push(1)
      }
      else{
        row1.push(0)
      }
      row2.push(0)
    }
    buffer1.push(row1)
    buffer2.push(row2)
  }

  rectW = width/w
  rectH = height/h
}



function draw() {
  background(0);


  fill(255)
  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      if(buffer1[i][j] != 0){
        rect(j*rectW, i*rectH, rectW, rectH)
      }
    }
  }
}
