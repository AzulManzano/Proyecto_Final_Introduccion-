const buffer1 =[]
const buffer2 =[]
let pausa = 1 


const conPistola = [
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
	[0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]

  const confOsilador = [
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,1,0,0,0,0,1,0,1,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
    ]
  
const conPezEnAgua =[
  [0,1,0,0,1],
  [1,0,0,0,0],
  [1,0,0,0,1],
  [1,1,1,1,0],
  [0,0,0,0,0]]

  const confPlaneador =[
    [1,1,1],
    [1,0,1],
    [1,1,1]]

const confBingBang =[
	[0,1,1,0,0],
	[1,1,0,0,0],
	[0,1,0,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
  ]
  
const confBalaPerdiad =[
  [0,1,0,0,0],
	[0,0,1,0,0],
	[1,1,1,0,0],
	[0,0,0,0,0],
	[0,0,0,0,0]
]

const confPatro =[
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  ]

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
  
  setInterval(gameOfLife,100)
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
      if(buffer1[i][j] == 0 && contador == 3 ){
        buffer2[i][j] = 1;
      }

      else if(buffer1[i][j] == 1 && contador == 3 ){
        buffer2[i][j] = 1;
      }

      else if(buffer1[i][j] == 1 && contador == 2 ){
        buffer2[i][j] = 1;
      }

      else{
        buffer2[i][j] = 0;
      }
    }
  }
  if(pausa == 1)
      {for(let i = 0; i< h ; i++){
        for(let j = 0; j< w ; j++){
          buffer1[i][j] = buffer2[i][j]
          buffer2[i][j] = 0 
        }
      }}
  
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

function programar(){
  pausa = 1
  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      buffer1[i][j] = 0;
      buffer2[i][j] = 0;
      
    }
  }
}

function entropia(){
  programar()
  pausa = 1
  for(let i = 0; i< h ; i++){
    for(let j = 0; j< w ; j++){
      if(Math.random() > 0.6){
        buffer1[i][j] = 1;
      }
    }
  }
}

function pistola(){
  programar()
  pausa = 1
  for(let i = 0; i< conPistola.length ; i++){
    for(let j = 0; j< conPistola[0].length ; j++){
      
        buffer1[i][j] = conPistola[i][j];
      
    }
  }
}

function pezEnAgua(){
  programar()
  pausa = 1
  for(let i = 0; i< conPezEnAgua.length ; i++){
    for(let j = 0; j< conPezEnAgua[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)][j+Math.floor(w/2)] = conPezEnAgua[i][j];
      
    }
  }
}

function bingBang(){
  programar()
  pausa = 1
  for(let i = 0; i< confBingBang.length ; i++){
    for(let j = 0; j< confBingBang[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)][j+Math.floor(w/2)] = confBingBang[i][j];
      
    }
  }
}

 function enPausa(){
    pausa = 0
 } 

 function seguir(){
  pausa = 1
} 

function balaPerdia(){
  programar()
  pausa = 1
  for(let i = 0; i< confBalaPerdiad.length ; i++){
    for(let j = 0; j< confBalaPerdiad[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)][j+Math.floor(w/2)] = confBalaPerdiad[i][j];
      
    }
  }
}

function oscilador(){
  programar()
  pausa = 1
  for(let i = 0; i< confOsilador.length ; i++){
    for(let j = 0; j< confOsilador[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)-5][j+Math.floor(w/2)-5] = confOsilador[i][j];
      
    }
  }
}

function planeador(){
  programar()
  pausa = 1
  for(let i = 0; i< confPlaneador.length ; i++){
    for(let j = 0; j< confPlaneador[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)-2][j+Math.floor(w/2)-2] = confPlaneador[i][j];
      
    }
  }
}

function iniciarConfiguracion(){
  programar()
  for(let i = 0; i< 10 ; i++){
    for(let j = 0; j< 10 ; j++){
      confPatro[i][j] = 0;      
    }
  }
  pausa = 0
}


function cambiarEstato(i, j){
  confPatro[i][j] = 1  
}

function aplicarConfiguracion(){
  programar()
  pausa = 1
  for(let i = 0; i< confPatro.length ; i++){
    for(let j = 0; j< confPatro[0].length ; j++){
      
        buffer1[i+Math.floor(h/2)-5][j+Math.floor(w/2)-5] = confPatro[i][j];
      
    }
  }
}

