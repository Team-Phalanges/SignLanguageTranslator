
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
  classifier.load('./model/A/model.json', function () {
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

//Draw a frame around hands detected in the screen

// A util function to create UI buttons
function setupButtons() {
  buttontry = select('#trybtn')
  buttontry.mousePressed(function () {


    var str1 = "abcd";
    var array = str1.split("");
    var n = Math.round(Math.random() * (array.length - 1));
    var letter = array[n];
    classifier.load('./model/'+letter+'/model.json');
    //document.getElementById("letter").innerHTML = array[n];
    var btn=document.getElementById('1');
    document.getElementById('img-current-letter').src = "./img/"+letter+".svg";
    document.getElementById('current-letter-text').innerHTML = letter;
    if (btn.value=="Show Answer"){
      setTimeout(checkFun, 5000);
      function checkFun(){
          var results = document.getElementById('result').innerHTML;
          var R= document.getElementById('current-letter-text').innerHTML;
          var sound= document.getElementById("checkSound")
          if(R==results){
              alert('GOOD JOB!')
          }else{
              alert("NOPE")
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


