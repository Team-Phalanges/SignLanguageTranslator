//This is an adaptation for the TeamPhalanges Project at the University of Tulsa

// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Image Classification using Feature Extractor with MobileNet
=== */

/* ===
// TeamPhalanges - Univesity of Tulsa - Adaptation of ml5 FeatureExtraction Example 
=== */

// Grab all the DOM elements
var video = document.getElementById('video');
var videoStatus = document.getElementById('videoStatus');
var loading = document.getElementById('loading');
var aButton = document.getElementById('aButton');
var bButton = document.getElementById('bButton');
var amountOfASamples = document.getElementById('amountOfASamples');
var amountOfBSamples = document.getElementById('amountOfBSamples');
var train = document.getElementById('train');
var loss = document.getElementById('loss');
var result = document.getElementById('result');
var confidence = document.getElementById('confidence');
var predict = document.getElementById('predict');
var saveButton = document.getElementById('saveButton')

// A variable to store the total loss
let totalLoss = 0;

// Create a webcam capture
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
    video.play();
  })

// A function to be called when the model has been loaded
function modelLoaded() {
  loading.innerText = 'Model loaded!';
}

// Extract the already learned features from MobileNet
const featureExtractor = ml5.featureExtractor('MobileNet', modelLoaded);
// Create a new classifier using those features
const classifier = featureExtractor.classification(video, videoReady);

// Predict the current frame.
function predict() {
  classifier.predict(gotResults);
}

// A function to be called when the video is finished loading
function videoReady() {
  videoStatus.innerText = 'Video ready!';
}

// When the A button is pressed, add the current frame
// from the video with a label of A to the classifier
aButton.onclick = function () {
  classifier.addImage('A');
  amountOfASamples.innerText = Number(amountOfASamples.innerText) + 1;
}

// When the B button is pressed, add the current frame
// from the video with a label of B to the classifier
bButton.onclick = function () {
  classifier.addImage('B');
  amountOfBSamples.innerText = Number(amountOfBSamples.innerText) + 1;
}

// Save the model
saveButton.onclick = function() {
    classifier.save();
    console.log('Custom Model saved!!');
  };

// When the train button is pressed, train the classifier
// With all the given A and B images
train.onclick = function () {
  classifier.train(function(lossValue) {
    if (lossValue) {
      totalLoss = lossValue;
      loss.innerHTML = 'Loss: ' + totalLoss;
    } else {
      loss.innerHTML = 'Done Training! Final Loss: ' + totalLoss;
    }
  });
}

// Show the results
function gotResults(err, results) {
  // Display any error
  if (err) {
    console.error(err);
  }
  if (results && results[0]) {
    result.innerText = results[0].label;
    confidence.innerText = results[0].confidence;
    classifier.classify(gotResults);
  }
}

// Start predicting when the predict button is clicked
predict.onclick = function () {
  classifier.classify(gotResults);
}

