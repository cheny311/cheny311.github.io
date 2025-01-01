let htwords = [  "mY 734r5 4r3 F411!n6",  "10n31Y m3 4nd mY 8r0k3n h34r7",  "7!m3 w45h 0FF 411 7h3 h4pp!n355",  "4v3C 70u7 13 C0ur463 d3 m377r3 3n p14C3 13 p1u5 8r!114n7 50ur!r3",  "p4!n !5 10v3r",  "C4nn07 Y0u 533 mY 734r5? ",  "Y0u 700k 4 p4r7 0F mY 50u1.",  "Y0u 13F7 mY w0r1d 4nd 0n1Y p4!n r3m4!n5.",  "! w!5h ! h4v3 n3v3r m337 Y0u"];
let currentWordIndex = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(htwords[currentWordIndex], 180, 200);
}

function keyPressed() {
  if (keyCode === 32) { // Check if space bar is pressed
    currentWordIndex = (currentWordIndex + 1) % htwords.length;
  }
}
