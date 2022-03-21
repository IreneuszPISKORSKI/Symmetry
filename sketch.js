var w = 450; 
var h = 450;
var img;
let sym_img;
let sym_img2;
let sym_img3;

function preload(){
    img = loadImage("assets/9pixels.png");
    sym_img = createImage(3,3);
    sym_img2 = createImage(3,3);
    sym_img3 = createImage(3,3);
}

function setup() {
    createCanvas(w, h);
    pixelDensity(1);
    loadPixels();
    sym_img.loadPixels();
    sym_img2.loadPixels();
    sym_img3.loadPixels();
    img.loadPixels();
    console.log("Hello Mosaique");

    for (var ligne = 0; ligne < 3; ligne++) { 
        for (var col = 0; col < 3; col++) {
            let index = (ligne*3 + col)*4;
            let sym_index = ((2 - ligne)*3 + col)*4;
            let sym_index2 = ((2 - ligne)*3 + 2 - col)*4;
            let sym_index3 = (ligne*3 + 2 - col)*4;

            sym_img.pixels[sym_index+0] = img.pixels[(index)+0];
            sym_img.pixels[sym_index+1] = img.pixels[(index)+1];
            sym_img.pixels[sym_index+2] = img.pixels[(index)+2];
            sym_img.pixels[sym_index+3] = img.pixels[(index)+3];
            
            sym_img2.pixels[sym_index2+0] = img.pixels[(index)+0];
            sym_img2.pixels[sym_index2+1] = img.pixels[(index)+1];
            sym_img2.pixels[sym_index2+2] = img.pixels[(index)+2];
            sym_img2.pixels[sym_index2+3] = img.pixels[(index)+3];

            sym_img3.pixels[sym_index3+0] = img.pixels[(index)+0];
            sym_img3.pixels[sym_index3+1] = img.pixels[(index)+1];
            sym_img3.pixels[sym_index3+2] = img.pixels[(index)+2];
            sym_img3.pixels[sym_index3+3] = img.pixels[(index)+3];
          }
    }
    sym_img.updatePixels();
    sym_img2.updatePixels();
    sym_img3.updatePixels();

    for (var ligne = 0; ligne < 3; ligne++) { 
        for (var col = 0; col < 3; col++) {
            let index = (ligne*3 + col)*4;
            console.log('L_org',ligne, 'C_org', col, ': R:',img.pixels[index], ' G:',img.pixels[index+1], ' B:',img.pixels[index+2], ' A:',img.pixels[index+3]);
            console.log('L_sym',ligne, 'C_sym', col, ': R:',sym_img.pixels[index], ' G:',sym_img.pixels[index+1], ' B:',sym_img.pixels[index+2], ' A:',sym_img.pixels[index+3]);
            console.log('L_sym2',ligne, 'C_sym2', col, ': R:',sym_img.pixels[index], ' G:',sym_img.pixels[index+1], ' B:',sym_img.pixels[index+2], ' A:',sym_img.pixels[index+3]);
            console.log('L_sym3',ligne, 'C_sym3', col, ': R:',sym_img.pixels[index], ' G:',sym_img.pixels[index+1], ' B:',sym_img.pixels[index+2], ' A:',sym_img.pixels[index+3]);
          }    
    image(img, 0, 0, 200, 200);
    image(sym_img, 0, 250, 200, 200);
    image(sym_img2, 250, 250, 200, 200);
    image(sym_img3, 250, 0, 200, 200);
    }  
    noLoop();
}
