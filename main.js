var SpeechRecognition = window.webkitSpeechRecognition;
var Textbox = document.getElementById("textbox");
var recognition = new SpeechRecognition();

function start()
{
    Textbox.innerHTML = "";
    recognition.start();
    Webcam.attach(camera);
} 

recognition.onresult = function(event) {

    console.log(event); 
   
   var Content = event.results[0][0].transcript;
   
       Textbox.innerHTML = Content;
       console.log(Content);
         if(Content == "selfie")
         {
           console.log("taking selfie --- ");
           speak();
         }
   }


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout (function(){
        _img_id = "selfie1";
        
        speak_data = "Taking Your Selfie In 5 Seconds"
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        take_snapshot();
    },5000);
}



function take_snapshot(){
    console.log(_img_id);

    Webcam.snap(function(data_uri) {
        if(_img_id ="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }

        if(_img_id ="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(_img_id ="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}


function show(){
    Webcam.attach(camera);
}