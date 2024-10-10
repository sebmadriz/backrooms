let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let endCongratulations;
let youDied;
let x = 0;

// load all images
function preload() {
  image1 = loadImage("img/image1.jpg");
  image2 = loadImage("img/image2.jpg");
  image3 = loadImage("img/image3.jpg");
  image4 = loadImage("img/image4.jpg");
  image5 = loadImage("img/image5.jpg");
  image6 = loadImage("img/image6.jpg");
  image7 = loadImage("img/image7.jpg");
  image8 = loadImage("img/image8.jpg");
  image9 = loadImage("img/image9.jpg");
  image10 = loadImage("img/image10.jpg");
  endCongratulations = loadImage("img/endCongratulations.gif");
  youDied = loadImage("img/youDied.png");

}

//canvas set to window size
function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  
  text("Click a door to go through the maze.", 50,50,80,100);
  text("Click to start", 50,105,80,100);
  text("Open the console for more", 50,130,80,100);
}

// click through game
function mousePressed(){
  x = x + 1;
  if(x == 1){

        print("room 1 open");
        image(image1,0,0,window.innerWidth,window.innerHeight);
    
  }
  if(x == 2){
    
    print("room 2 open");
    image(image2,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 3){
    
    print("room 3 open");
    image(image3,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 4){
    
    print("room 4 open");
    image(image4,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 5){
    
    print("room 5 open");
    image(image5,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 6){
    
    print("room 6 open");
    image(image6,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 7){
    
    print("room 7 open");
    image(image7,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 8){
    
    print("room 8 open");
    image(image8,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 9){
    
    print("room 9 open");
    image(image9,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 10){
    
    print("room 10 open");
    image(image10,0,0,window.innerWidth,window.innerHeight);

  }
  if(x == 11){
    
    print("Congratulations! You made it through!");
    image(endCongratulations,0,0,window.innerWidth,window.innerHeight);
    
  }
  if(x == 12){
    
    print("Actually you died! :(");
    image(youDied,0,0,window.innerWidth,window.innerHeight);
    
  }
  }