let font;  //載入字型文字
let points = [];  //轉成點狀文字
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/Neuton-Bold.ttf") 
}
//===================================================
function setup() {
  createCanvas(windowWidth, windowHeight);
  points = font.textToPoints("TKU", width/2-300, height/2+100, 200, {
    sampleFactor:0.06
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
  for (let i=0; i<points.length; i++) { 
    text(str(i),points[i].x,points[i].y)
    ellipse(points[i].x,points[i].y,15)
 } 
  angleMode(DEGREES)
  translate(width/2,height/2)
}

function draw() {
  
  background("#48cae4");
  noFill() //以下畫圖或畫方形都不要填滿顏色
  stroke("@48cae4") //線條的顏色
  // ======宣告變數
  let r_w =50 + mouseX/200
  let bc_w =50  +  mouseX/200
  let sc_w=25 + mouseX/200
  
 // strokeWeight(3) //線條的粗細
 // ellipse(25+bc_w*0,25,50) //畫橢圓(正圓)
 // rect(rect_width*0,0,rect_width) //畫方形
  //ellipse(rect_width*1,50,sc_w) 

  //ellipse(25+bc_w*1,25,50) //畫橢圓(正圓)
 // rect(rect_width*1,0,rect_width) //畫方形
 // ellipse(rect_width*2,50,sc_w)

 // ellipse(25+bc_w*2,25,50) //畫橢圓(正圓)
 // rect(rect_width*2,0,rect_width) //畫方形
 // ellipse(rect_width*3,50,sc_w)

  //======重複相同指令的for指令======

  for(let j=0;j<60;j=j+1){
     for(let k = 0 ; k<60;k++){
      //x=0
      //x<width
      //x=x+rect_width
   push();
   translate(25+bc_w*k-width/2,50*j-height/2,0);
   ellipse(0,0,bc_w);
   rect(-r_w/2,-r_w/2,r_w,r_w);
   pop();
}
  }
  points = font.textToPoints("TKU", width/2-300, height/2+100, 200, {
    sampleFactor:0.09
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
 
  for (let i=0; i<points.length; i++) { 
     text(str(i),points[i].x,points[i].y)
    ellipse(points[i].x,points[i].y,15)
  } 
  
  }






