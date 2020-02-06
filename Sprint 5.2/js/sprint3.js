
let featureExtractor;
let classifier;
let video;
let loss;
let images = 0;


function cacheImages(array)
{
    if (!cacheImages.list) {
        cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

cacheImages(["./img/Sign_language_A.svg", "./img/Sign_language_B.svg", "./img/Sign_language_C.svg",
"./img/Sign_language_D.svg","./img/Sign_language_E.svg","./img/Sign_language_F.svg","./img/Sign_language_G.svg",
"./img/Sign_language_H.svg","./img/Sign_language_I.svg"]);



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
  select('#modelStatus').html('Base Model (MobileNet) Loaded!');
  classifier.load('./model/model.json', function () {
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
function runHandDetection() {
  handTrack.startVideo(video).then(function (status) {
    console.log("video started", status);
    if (status) {
      updateNote.innerText = "Video started. Now tracking"
      isVideo = true
      runDetection()
    } else {
      updateNote.innerText = "Please enable video"
    }
  });

  model.detect(video).then(predictions => {
    console.log("Predictions: ", predictions);
    model.renderPredictions(predictions, canvas, context, video);
    if (isVideo) {
      requestAnimationFrame(runDetection);
    }
  });
}

// A util function to create UI buttons
function setupButtons() {
  buttontry = select('#trybtn')
  buttontry.mousePressed(function () {
    var str1 = "abcdefghi";
    var array = str1.split("");
    var n = Math.round(Math.random() * (array.length - 1));

    document.getElementById("letter").innerHTML = array[n];

    if(array[n] == "a"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_A.svg?t=" + new Date().getTime();
      document.getElementById('current-letter').innerHTML = "A";
    }
    else if(array[n] == "b"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_B.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "B";
    }
    else if(array[n] == "c"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_C.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "C";
    }
    else if(array[n] == "d"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_D.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "D";
    }
    else if(array[n] == "e"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_E.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "E";
    }
    else if(array[n] == "f"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_F.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "F";
    }
    else if(array[n] == "g"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_G.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "G";
    }
    else if(array[n] == "h"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_H.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "H";
    }
    else if(array[n] == "i"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_I.svg?t=" + new Date().getTime();
      document.getElementById('current-letter-text').innerHTML = "I";
    }    


  });

  buttontest = select('#testbtn')
  
// Test 1

// PURPOSE:
// Test the button element on the UI presents the user with the correct
// feedback in regards to there input from the webcam and test results
// to match with a alphabet letter.

// SETUP:
// None needed.

// EXPECTED OUTPUTS:
// Results of test failure or pass written to the console.

// Testing requirements covered for buttontest.mousePressed
// 1. Results of test displayed correctly to the user in the 'result' element
// 2. UI updated with the correct test results in the 'R' element

function testForButtonTestMousePressed(){
  
  var results = document.getElementById('result').innerHtml;
  var feedbackToUser = document.getElementById('R').innerHTML;

  if(results == ''){
    console.log("User not provided results of test")
  }
  else if(results == 1 && feedbackToUser == 'Good'){
    console.log("Correct feedback presented to user for a " + feedbackToUser + " test")
  }
  else if(results != 1 && feedbackToUser == 'Wrong'){
    console.log("Correct feedback presented to user for a " + feedbackToUser + " test")
  }

}

  buttontest.mousePressed(function () {
    var lt = document.getElementById("result").innerHTML;
    var l = document.getElementById("letter").innerHTML;
    if (lt == l) {
      document.getElementById("R").innerHTML = "Good";
    } else { document.getElementById("R").innerHTML = "Wrong" }
  });





  buttonsubmit = select('#submit')


// Test 2

// PURPOSE:
// Test if the user is presented with the correct image for the letter of the alphabet
// and corresponding label for the letter on the UI.

// SETUP:
// None needed.

// EXPECTED OUTPUTS:
// Results of test failure or pass written to the console.

// Testing requirements for buttonsubmit.mousePressed
// 1. Correct image loaded into html element 'img-current-letter'
// 2. Correct label for image is displayed in the 'current-letter' element

function testButtonSubmitMousePressed(){

  var srcImage = document.getElementById('img-current-letter').src;
  var labelForImage = document.getElementById('current-letter').innerHTML;


  if(labelForImage == "A" && srcImage == "./img/Sign_language_A.svg?" ){
    console.log("Correct label and image displayed to user for the letter A.")
  }
  else if(labelForImage  == "B" && srcImage == "./img/Sign_language_B.svg"){
    console.log("Correct label and image displayed to user for the letter B.")
  }
  else if(labelForImage  == "C" && srcImage == "./img/Sign_language_C.svg"){
    console.log("Correct label and image displayed to user for the letter C.")
  }
  else if(labelForImage  == "D" && srcImage == "./img/Sign_language_D.svg"){
    console.log("Correct label and image displayed to user for the letter D.")
  }
  else if(labelForImage  == "E" && srcImage == "./img/Sign_language_E.svg"){
    console.log("Correct label and image displayed to user for the letter E.")
  }
  else if(labelForImage  == "F" && srcImage == "./img/Sign_language_F.svg"){
    console.log("Correct label and image displayed to user for the letter F.")
  }
  else if(labelForImage  == "G" && srcImage == "./img/Sign_language_G.svg"){
    console.log("Correct label and image displayed to user for the letter G.")
  }
  else if (labelForImage  == "H" && srcImage == "./img/Sign_language_H.svg"){
    console.log("Correct label and image displayed to user for the letter H.")
  }
  else if(labelForImage  == "I" && srcImage == "./img/Sign_language_I.svg"){
    console.log("Correct label and image displayed to user for the letter I.")
  }
  else {
    console.log("Incorrect label and image displayed to user for the letter " + labelForImage)
  }  
}



  buttonsubmit.mousePressed(function () {
    var c = document.getElementById("value").value;
    document.getElementById("input").innerHTML = c;
    images = 0;

    if(c = "a"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_A.svg";
      document.getElementById('current-letter').innerHTML = "A";
    }
    else if(c = "b"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_B.svg";
      document.getElementById('current-letter-text').innerHTML = "B";
    }
    else if(c = "c"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_C.svg";
      document.getElementById('current-letter-text').innerHTML = "C";
    }
    else if(c = "d"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_D.svg";
      document.getElementById('current-letter-text').innerHTML = "D";
    }
    else if(c = "e"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_E.svg";
      document.getElementById('current-letter-text').innerHTML = "E";
    }
    else if(c = "f"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_F.svg";
      document.getElementById('current-letter-text').innerHTML = "F";
    }
    else if(c = "g"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_G.svg";
      document.getElementById('current-letter-text').innerHTML = "G";
    }
    else if(c = "h"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_H.svg";
      document.getElementById('current-letter-text').innerHTML = "H";
    }
    else if(c = "i"){
      document.getElementById('img-current-letter').src = "./img/Sign_language_I.svg";
      document.getElementById('current-letter-text').innerHTML = "I";
    }   


  });

  buttonadd = select('#addimage')
  buttonadd.mousePressed(function () {
    var c = document.getElementById("value").value;

    var input = c.toString();
    classifier.addImage(input);
    select('#amount').html(images++);

  });

  train = select('#train');
  train.mousePressed(function () {
    classifier.train(function (lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('Loss: ' + loss);
      } else {
        select('#loss').html('Done Training! Final Loss: ' + loss);
      }
    });
  });

  // Predict Button
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);

  // Save model
  saveBtn = select('#save');
  saveBtn.mousePressed(function () {
    classifier.save();
  });

  // Load model
  loadBtn = select('#load');
  loadBtn.changed(function () {
    classifier.load(loadBtn.elt.files, function () {
      select('#modelStatus').html('Custom Model Loaded!');
    });
  });
}

// Testing requirement for gotResults
// 1. 


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

handTrack.load(modelParams).then(lmodel => {
  // detect objects in the image.
  model = lmodel
  updateNote.innerText = "Loaded Model!"
  trackButton.disabled = false
});
