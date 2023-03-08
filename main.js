noseX=0;
noseY=0;
function preload(){
clown_nose = loadImage("https://i.postimg.cc/Vk6vpXHf/lips.png");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses)

}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function draw(){
image(video,0,0,400,400);
image(clown_nose,noseX,noseY,80,40);
}
function take_snapshot(){
    save("Norah.png");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y+35;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}
