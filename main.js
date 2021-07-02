status = "";
objects = [];

function preload(){
    alarm = loadSound("alarm.mp3");
}

function setup(){
    canvas= createCanvas(450 , 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(450 ,450);
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detecting";
}

function draw(){
    image(video , 0 , 0 , 450 , 450);
    for(i = 0 ; i < objects.length ; i++){
        if(objects[i].label = "person"){
            alarm.stop();
            document.getElementById("Baby_detected").innerHTML = "Baby Found";
        }
        else{
            alarm.play();
            document.getElementById("Baby_detected").innerHTML = "Baby Not Found";
        }
    }
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(video , gotResult);
}

function gotResult(error , results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}