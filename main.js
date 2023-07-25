function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();


}

function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    fill("yellow");
    stroke("black");
    circle(50,50,30);
    circle(50,400,30);
    circle(590,50,30);
    circle(590,400,30);
    fill("blue")
    stroke("black");
    rect(65,45,510,10);
    rect(65,395,510,10);
    rect(45,64,10,322);
    rect(585,64,10,322);

}

function take_snapshot(){
    save('student_name.png');
}


function take_snapshot(){
    save('student_name.png');
}