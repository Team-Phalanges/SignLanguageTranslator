
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
  const options = { numLabels: 3 };
  classifier = featureExtractor.classification(video, options);
  // Set up the UI buttons
  setupButtons();
}

// A function to be called when the model has been loaded
function modelReady() {
  //select('#modelStatus').html('Base Model (MobileNet) Loaded!');
  classifier.load('./model/bsl/A/model.json', function () {
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


// A util function to create UI buttons
function setupButtons() {
  buttontry = select('#trybtn')
  buttontry.mousePressed(function () {

    if (imageIndex == 0) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_A.png";
      document.getElementById('current-letter').innerHTML = "A";
      document.getElementById("letter").innerHTML = "a";
      classifier.load('./model/bsl/A/model.json');
      imageIndex++;
    }
    else if (imageIndex == 1) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_B.png";
      document.getElementById('current-letter-text').innerHTML = "B";
      document.getElementById("letter").innerHTML = "b";
      classifier.load('./model/bsl/B/model.json');
      imageIndex++;
    }
    else if (imageIndex == 2) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_C.png";
      document.getElementById('current-letter-text').innerHTML = "C";
      document.getElementById("letter").innerHTML = "c";
      classifier.load('./model/bsl/C/model.json');
      imageIndex++;
    }
    else if (imageIndex == 3) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_D.png";
      document.getElementById('current-letter-text').innerHTML = "D";
      document.getElementById("letter").innerHTML = "d";
      classifier.load('./model/bsl/D/model.json');
      imageIndex++;
    }
    else if (imageIndex == 4) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_E.png";
      document.getElementById('current-letter-text').innerHTML = "E";
      document.getElementById("letter").innerHTML = "e";
      classifier.load('./model/bsl/E/model.json');
      imageIndex++;
    }
    else if (imageIndex == 5) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_F.png";
      document.getElementById('current-letter-text').innerHTML = "F";
      document.getElementById("letter").innerHTML = "f";
      classifier.load('./model/bsl/F/model.json');
      imageIndex++;
    }
    else if (imageIndex == 6) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_G.png";
      document.getElementById('current-letter-text').innerHTML = "G";
      document.getElementById("letter").innerHTML = "g";
      classifier.load('./model/bsl/G/model.json');
      imageIndex++;
    }
    else if (imageIndex == 7) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_H.png";
      document.getElementById('current-letter-text').innerHTML = "H";
      document.getElementById("letter").innerHTML = "h";
      classifier.load('./model/bsl/H/model.json');
      imageIndex++;
    }
    else if (imageIndex == 8) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_I.png";
      document.getElementById('current-letter-text').innerHTML = "I";
      document.getElementById("letter").innerHTML = "i";
      classifier.load('./model/bsl/I/model.json');
      imageIndex++;
    }
    else if (imageIndex == 9) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_J.png";
      document.getElementById('current-letter-text').innerHTML = "J";
      document.getElementById("letter").innerHTML = "j";
      classifier.load('./model/bsl/J/model.json');
      imageIndex++;
    }
    else if (imageIndex == 10) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_K.png";
      document.getElementById('current-letter-text').innerHTML = "K";
      document.getElementById("letter").innerHTML = "k";
      classifier.load('./model/bsl/K/model.json');
      imageIndex++;
    }
    else if (imageIndex == 11) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_L.png";
      document.getElementById('current-letter-text').innerHTML = "L";
      document.getElementById("letter").innerHTML = "l";
      classifier.load('./model/bsl/L/model.json');
      imageIndex++
    }
    else if (imageIndex == 12) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_M.png";
      document.getElementById('current-letter-text').innerHTML = "M";
      document.getElementById("letter").innerHTML = "m";
      classifier.load('./model/bsl/M/model.json');
      imageIndex++;
    }
    else if (imageIndex == 13) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_N.png";
      document.getElementById('current-letter-text').innerHTML = "N";
      document.getElementById("letter").innerHTML = "n";
      classifier.load('./model/bsl/N/model.json');
      imageIndex++;
    }
    else if (imageIndex == 14) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_O.png";
      document.getElementById('current-letter-text').innerHTML = "O";
      document.getElementById("letter").innerHTML = "o";
      classifier.load('./model/bsl/O/model.json');
      imageIndex++;
    }
    else if (imageIndex == 15) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_P.png";
      document.getElementById('current-letter-text').innerHTML = "P";
      document.getElementById("letter").innerHTML = "p";
      classifier.load('./model/bsl/P/model.json');
      imageIndex++;
    }
    else if (imageIndex == 16) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Q.png";
      document.getElementById('current-letter-text').innerHTML = "Q";
      document.getElementById("letter").innerHTML = "q";
      classifier.load('./model/bsl/Q/model.json');
      imageIndex++;
    }
    else if (imageIndex == 17) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_R.png";
      document.getElementById('current-letter-text').innerHTML = "R";
      document.getElementById("letter").innerHTML = "r";
      classifier.load('./model/bsl/R/model.json');
      imageIndex++;
    }
    else if (imageIndex == 18) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_S.png";
      document.getElementById('current-letter-text').innerHTML = "S";
      document.getElementById("letter").innerHTML = "s";
      classifier.load('./model/bsl/S/model.json');
      imageIndex++;
    }
    else if (imageIndex == 19) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_T.png";
      document.getElementById('current-letter-text').innerHTML = "T";
      document.getElementById("letter").innerHTML = "t";
      classifier.load('./model/bsl/T/model.json');
      imageIndex++;
    }    
    else if (imageIndex == 20) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_U.png";
      document.getElementById('current-letter-text').innerHTML = "U";
      document.getElementById("letter").innerHTML = "u";
      classifier.load('./model/bsl/U/model.json');
      imageIndex++;
    }
    else if (imageIndex == 21) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_V.png";
      document.getElementById('current-letter-text').innerHTML = "V";
      document.getElementById("letter").innerHTML = "v";
      classifier.load('./model/bsl/V/model.json');
      imageIndex++;
    }
    else if (imageIndex == 22) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_W.png";
      document.getElementById('current-letter-text').innerHTML = "W";
      document.getElementById("letter").innerHTML = "w";
      classifier.load('./model/bsl/W/model.json');
      imageIndex++;
    }
    else if (imageIndex == 23) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_X.png";
      document.getElementById('current-letter-text').innerHTML = "X";
      document.getElementById("letter").innerHTML = "x";
      classifier.load('./model/bsl/X/model.json');
      imageIndex++;
    }
    else if (imageIndex == 24) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Y.png";
      document.getElementById('current-letter-text').innerHTML = "Y";
      document.getElementById("letter").innerHTML = "y";
      classifier.load('./model/bsl/Y/model.json');
      imageIndex++;
    }
    else if (imageIndex == 25) {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Z.png";
      document.getElementById('current-letter-text').innerHTML = "Z";
      document.getElementById("letter").innerHTML = "z";
      classifier.load('./model/bsl/Z/model.json');
      imageIndex = 0;
    }

  });


  buttontest = select('#testbtn') 
  buttontest.mousePressed(function () {
    var lt = document.getElementById("result").innerHTML;
    var l = document.getElementById("letter").innerHTML;
    if (lt == l) {
      document.getElementById("R").innerHTML = "Good";
    } else { document.getElementById("R").innerHTML = "Wrong" }
  });


  buttonsubmit = select('#submit')
  buttonsubmit.mousePressed(function () {
    var c = document.getElementById("value").value;
    document.getElementById("input").innerHTML = c;
    images = 0;

    if (c = "a") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_A.png";
      document.getElementById('current-letter').innerHTML = "A";
    }
    else if (c = "b") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_B.png";
      document.getElementById('current-letter-text').innerHTML = "B";
    }
    else if (c = "c") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_C.png";
      document.getElementById('current-letter-text').innerHTML = "C";
    }
    else if (c = "d") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_D.png";
      document.getElementById('current-letter-text').innerHTML = "D";
    }
    else if (c = "e") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_E.png";
      document.getElementById('current-letter-text').innerHTML = "E";
    }
    else if (c = "f") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_F.png";
      document.getElementById('current-letter-text').innerHTML = "F";
    }
    else if (c = "g") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_G.png";
      document.getElementById('current-letter-text').innerHTML = "G";
    }
    else if (c = "h") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_H.png";
      document.getElementById('current-letter-text').innerHTML = "H";
    }
    else if (c = "i") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_I.png";
      document.getElementById('current-letter-text').innerHTML = "I";
    }
    else if (c = "j") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_J.png";
      document.getElementById('current-letter-text').innerHTML = "J";
    }
    else if (c = "k") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_K.png";
      document.getElementById('current-letter-text').innerHTML = "K";
    }
    else if (c = "l") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_L.png";
      document.getElementById('current-letter-text').innerHTML = "L";
    }
    else if (c = "m") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_M.png";
      document.getElementById('current-letter-text').innerHTML = "M";
    }
    else if (c = "n") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_N.png";
      document.getElementById('current-letter-text').innerHTML = "N";
    }
    else if (c = "o") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_O.png";
      document.getElementById('current-letter-text').innerHTML = "O";
    }
    else if (c = "p") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_P.png";
      document.getElementById('current-letter-text').innerHTML = "P";
    }
    else if (c = "q") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Q.png";
      document.getElementById('current-letter-text').innerHTML = "Q";
    }
    else if (c = "r") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_R.png";
      document.getElementById('current-letter-text').innerHTML = "R";
    }
    else if (c = "s") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_S.png";
      document.getElementById('current-letter-text').innerHTML = "S";
    }
    else if (c = "t") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_T.png";
      document.getElementById('current-letter-text').innerHTML = "T";
    }
    else if (c = "u") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_U.png";
      document.getElementById('current-letter-text').innerHTML = "U";
    }
    else if (c = "v") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_V.png";
      document.getElementById('current-letter-text').innerHTML = "V";
    }
    else if (c = "w") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_W.png";
      document.getElementById('current-letter-text').innerHTML = "W";
    }
    else if (c = "x") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_X.png";
      document.getElementById('current-letter-text').innerHTML = "X";
    }
    else if (c = "y") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Y.png";
      document.getElementById('current-letter-text').innerHTML = "Y";
    }
    else if (c = "z") {
      document.getElementById('img-current-letter').src = "./imgBSL/Sign_language_Z.png";
      document.getElementById('current-letter-text').innerHTML = "Z";
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


