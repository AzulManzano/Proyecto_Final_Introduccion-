const buffer1 =[]
const buffer2 =[]

const w = 55
const h = 55

let rectW = 0
let rectH = 0

function setup() {
  const canvas = createCanvas(550, 550);

  for(let i = 0; i< h ; i++){
    const row1 = []
    const row2 = []
    for(let j = 0; j< w ; j++){
      if(Math.random() > 0.6){
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

  setInterval(gameOfLife,300)
}

function gameOfLife(){

  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      let contador = 0
      if((i == 0)||(i == h-1)||(j == 0)||(j==w-1)){
        let antesI = i-1
        let despuesI = i+1
        let antesJ = j-1
        let despuesJ = j+1
        if(i == 0){
          antesI = h-1
        }
        if(i == h-1){
          despuesI = 0
        }
        if(j == 0){
          antesJ = w-1
        }
        if(j==w-1){
          despuesJ = 0
        }

        contador +=  buffer1[despuesI][j]
        contador +=  buffer1[antesI][j]

        contador +=  buffer1[i][despuesJ]
        contador +=  buffer1[i][antesJ]

        contador +=  buffer1[antesI][antesJ]
        contador +=  buffer1[antesI][despuesJ]
        contador +=  buffer1[despuesI][antesJ]
        contador +=  buffer1[despuesI][despuesJ]

      }
      else {
        

        contador +=  buffer1[i+1][j]
        contador +=  buffer1[i-1][j]

        contador +=  buffer1[i][j+1]
        contador +=  buffer1[i][j-1]

        contador +=  buffer1[i-1][j-1]
        contador +=  buffer1[i-1][j+1]
        contador +=  buffer1[i+1][j-1]
        contador +=  buffer1[i+1][j+1]
      }
      if(buffer1[i][j] == 0 && contador == 3){
        buffer2[i][j] = 1;
      }

      else if(buffer1[i][j] == 1 && contador == 3){
        buffer2[i][j] = 1;
      }

      else if(buffer1[i][j] == 1 && contador == 2){
        buffer2[i][j] = 1;
      }

      else{
        buffer2[i][j] = 0;
      }
    }
  }
  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      buffer1[i][j] = buffer2[i][j]
      buffer2[i][j] = 0 
    }
  }

}


function draw() {
  background(0);
  

  noStroke()
  fill(255)
  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      if(buffer1[i][j] != 0){
        rect(j*rectW, i*rectH, rectW, rectH)
      }
    }
  }
}
