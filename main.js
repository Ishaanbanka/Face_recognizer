Webcam.set({

    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
    
    });
    
    camera = document.getElementById("cam");
    
    Webcam.attach('#cam');
    
    function snapshot(){
    
    Webcam.snap(function(data_uri){
    
        document.getElementById("result").innerHTML = '<img id = "snap" src = "'+data_uri+'"/>';
    });
    }
    
    console.log("ml5" , ml5.version);
     classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/f6ggezjly/model.json', modelloaded);
    
    function modelloaded(){
    
    console.log("Model is Loaded");
    
    }
    
    function show() {
    
    img = document.getElementById('snap');
    
    classifier.classify(img, gotresult);
    
    
    }
    
     function gotresult(error, results) {
    
    if(error){
    
    console.error(error);
    
    }
    else{
    
    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    
    
    }
    
    
    }
    