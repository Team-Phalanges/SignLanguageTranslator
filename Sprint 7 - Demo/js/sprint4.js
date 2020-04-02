
let featureExtractor;
let classifier;
let video;
let loss;
let images = 0;
let imageIndex = 1;



function setup() {
  noCanvas();
  // Create a video element
  video = createCapture(VIDEO);
  // Append it to the videoContainer DOM element
  video.parent('videoContainer');
  // Extract the already learned features from MobileNet
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // Create a new classifier using those features and give the video we want to use
  const options = { numLabels: 26 };
  classifier = featureExtractor.classification(video, options);
  // Cache images
  //cacheImages(cacheImages);
  // Set up the UI buttons
  setupButtons();
}

// A function to be called when the model has been loaded
function modelReady() {
  //select('#modelStatus').html('Base Model (MobileNet) Loaded!');
  classifier.load('../ASLmodel/a/model.json', function () {
    select('#modelStatus').html('Custom Model Loaded!');
  });
}

// A function to be called when the video has loaded
function videoReady() {
  select('#videoStatus').html('Video ready!');
}

// Classify the current frame.
function classify() {
  classifier.classify(gotResults);
}
var n = 0
// A util function to create UI buttons
function setupButtons() {
  buttontry = select('#trybtn')
  buttontry.mousePressed(function () {

    var page = location.href.split("/").slice(-1);
    //Changed for DEMO*****
    var str1 = "ab";
    var array = str1.split("");
    
    var letter = array[n];
    //document.getElementById("letter").innerHTML = array[n];
    var btn=document.getElementById('1');

    //Check which page we're on for correct images
    if (page=="asl.html"){
      classifier.load('../ASLmodel/'+letter+'/model.json');
      document.getElementById('img-current-letter').src = "../imgASL/Sign_language_"+letter+".png";
    }
    else if(page=="bsl.html"){
      classifier.load('../ASLmodel/'+letter+'/model.json');
      document.getElementById('img-current-letter').src = "../imgBSL/Sign_language_"+letter+".png";
    }
    else if(page=="isl.html"){
      classifier.load('../ASLmodel/'+letter+'/model.json');
      document.getElementById('img-current-letter').src = "../imgISL/Sign_language_"+letter+".png";
    }
    
    document.getElementById('current-letter-text').innerHTML = letter;
    if (btn.value=="Show Answer"){
      setTimeout(checkFun, 3000);
      function checkFun(){
          var results = document.getElementById('result').innerHTML;
          var R= document.getElementById('current-letter-text').innerHTML;
          var sound= document.getElementById("checkSound")

          //Changed for demo*********
          if(R=='a'){
            swal('GOOD JOB!', 'You were correct!', 'success');
            n=n+1
          }else{
            swal("WRONG!", "Your sign was incorrect.", "error" )
            n=n+1
          }
      }
    }



  });



  // Predict Button
  buttonPredict = select('#1');
  buttonPredict.mousePressed(classify);

  // Save model

  // Load model

}


// Show the results
function gotResults(err, results) {
  // Display any error
  if (err) {
    console.error(err);
  }
  if (results && results[0]) {
    select('#result').html(results[0].label);
    select('#confidence').html(results[0].confidence);
    classify();
  }
}


