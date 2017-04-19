var img;
var img2;
var img3;
var img4;
var img5;


function setup() {
createCanvas(1500, 1500);
img = loadImage("http://i.imgur.com/P3o6ZLD.jpg");
img2 = loadImage("http://i.imgur.com/3LlgiGP.jpg");
img3 = loadImage("http://i.imgur.com/PDC6OQq.jpg");
img4 = createImg("http://i.imgur.com/FiZS3mr.gif");
	img4.hide();
img5 = createImg("http://i.imgur.com/9dqBGPF.gif");
	img5.hide();
 


}



function draw() {

image(img, 0, 0, img.width/2, img.height/2);
image(img2, 540, 200, img.width/2, img.height/2);
image(img3, 0,675);
image (img4,540, 0);
image (img5, 400, 870);
}
