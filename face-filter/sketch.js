

// clmtrackr + p5 basic exmaple. Face Tracking example created by Kyle McDonald revised by Xin Xin, 2020
// https://kylemcdonald.github.io/cv-examples/

let capture;
let tracker;
let positions;
let words= ["伱不湜我，所姒伱鈈会眀白伱對莪の薏図。", " ぺ畱ぅ很９的頭發能ゐ尒説剪就剪，愛ぅ很９的尒也能説忘就忘。◇",  "離開辷個折磨妳感情啲亽，始終者β是對啲", "涐冇密集恐惧症，不能接近心眼囝多の亽", "ㄩ總有⒈個人要贏的，那個亽為什么不能是我", "朩要過分善良，畢竟有些亽，真的挺朩是亽的", "涐 们 旳 丗 届 、 能 ド 能 永 远 阳 光 灿 烂", "事實証明感情是岢y被慢慢淡掉的哪有那庅多⒈輩子的事", "“自尊、？自爱、？我把一切都丢弃,我变成了最肮脏的东西",  "★゜ 尒 詠 逺 Sんī 硪 德 蕞 嗳，⑧ 菅 āì 妳 侑 哆 難，莪 啲 惢 芷 想 屬 於 伱。︶ㄣ", "╰+當亱募降臨dㄖ寸鯸孤韣禾ó寂寞湧仩訫頭。メo", "〆丗事本就惡俗ъú堪能忼嘅凢f能諒幾亼",  "①直佷紾惜恠①起のㄖ孒.", "吢 早已蒾矢 · 煙の稥菋... 彌漫", "涐只是一个罘起眼旳尕㈢", "&涐想.沵德>芯里只裝著涐﹌﹋", "偸偸 旳 想念 沵旳 ﹁切.勼足夠 る.!!", "莪哭ㄋ，眼淚變成ㄋ廉價的祈求", "吢恠痛.涙恠蓅.噌俓の所冇苡卟恠擁冇",];

let currentWordIndex=0

//let images = ["img/bg1.png","img/bg2.png","img/bg3.png","img/bg5.png","img/bg6.png","img/bg7.png","img/bg8.png","img/bg9.png","img/bg10.png"];
let currentImage = 0;
let img = [];


var img11,img22,img33,img44,img55
var fish,beibei
function preload(){
  
    img11=loadImage("img11.png");
    img22=loadImage("img22.png");
    //img33=loadImage("img33.png")
    img44=loadImage("beibei.png");
    img55=loadImage("fish.png");

    for(let i=0; i<9; i++){
      img[i] = loadImage('img/bg'+i+'.png');
    }

}



function setup() {
    // load p5 functions:
    

    createCanvas(windowWidth, windowHeight);
    
    capture = createCapture(VIDEO);

    capture.size(width, height);
    capture.hide();
    

    // load clmtrackr functions:
    tracker = new clm.tracker(); // create a new clmtrackr object
    tracker.init(); // initialize the object
    tracker.start(capture.elt); // start tracking the video element capture.elt

    // console.log(img);

    
  }

function draw() {
  tint(255, 127);
  image(capture,0, 0, width, height); // 绘制翻转后的视频帧
  image(img[currentImage], 0, 0, windowWidth, windowHeight);
//   push(); // 保存当前的坐标系统状态
//   translate(width, 0); // 将坐标系移到画布右上角
//   scale(-1, 1); // 水平翻转坐标系
//   image(capture,0, 0, width, height); // 绘制翻转后的视频帧
//   pop(); // 恢复之前保存的坐标系统状态
//   // push()
//   // tint(255, 127);
//   // // image(img44,0,0,windowWidth,windowHeight)
  
//   // pop()
//   // push();
//   // tint(255, 127); // Display at half opacity
// image(img(currentImage),windowWidth,windowHeight);
// // pop();
//   //image(img33,0,0,windowWidth,windowHeight)
 
//   // if (img) {
//   //   image(img, 0, 0, windowWidth, windowHeight)
//   // }

//     let positions = tracker.getCurrentPosition(); // updates the tracker with current positions
// //     console.log(positions); // uncomment to see the list of arrays
  
// //     // draw face outline
// push(); // 保存当前的坐标系统状态
//   translate(width, 0); // 将坐标系移到画布右上角
//   scale(-1, 1); // 水平翻转坐标系
 
  
//     noFill();
//     stroke(255);
  


// // if (positions.length > 0) {
// //     fill(255, 0, 0);
// //     rect(positions[19][0], positions[19][1], 90, 20);
// //   }
 
  
  
//   if (positions.length>0){
//     image(img11,positions[23][0],positions[23][1],100,100);
//     image(img22,positions[70][0],positions[70][1],100,100)
//   }
//   pop(); // 恢复之前保存的坐标系统状态
//   // image(images[currentImage], 0, 0, windowWidth, windowHeight);
//   textSize(90)
//   textStyle(BOLD)
//   let green = color('#3FFF00');
//   fill(green);
//     text(words[currentWordIndex],88,180)
//     push()
//     loadPixels();
//     for (let x = 0; x < width; x++) {
//       for (let y = 0; y < height; y++) {
//         let index = (x + y * width) * 4;
//         let r = pixels[index];
//         let g = pixels[index + 1];
//         let b = pixels[index + 2];
//         let a = pixels[index + 3];
//         pixels[index] = (r + g + b) / 3;
//         pixels[index + 1] = (r + g + b) / 3;
//         pixels[index + 2] = (r + g + b) / 3;
//       }
//     }
//     updatePixels();
    
//     // Apply blur to the text
//     blur(1);
//     textSize(90)
//   let black = color('#1C2619');
//   fill(black);
//   tint(255, 127);
//     text(words[currentWordIndex],92,180)
//     pop()  
//     if (positions.length>0){
//       image(img55,positions[11][0],positions[1][1],220,220);
      
    // } 
}


function mousePressed() {
  saveCanvas("brokenheart" + ".jpg");
}
//img
function keyPressed() {
  if (keyCode === ENTER) {
    currentImage++;
    console.log("i am here");
    // if (currentImage >= img.length) {
    //   currentImage = 0;
    //  }

  }
}
//text
function keyPressed() {
  if (keyCode === 32) { // Check if space bar is pressed
    currentWordIndex = (currentWordIndex + 1) % words.length;
    clear();
    // textSize(180)
    
    text(words[currentWordIndex], 180,200);
   
  }
}