
let featureExtractor;
let classifier;
let video;
let loss;
let images = 0;
let imageIndex = 1;
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")


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
  classifier.load('./model/asl/A/model.json', function () {
    select('#modelStatus').html('Custom Model Loaded!');
  });
}

// A function to be called when the video has loaded
function videoReady() {
  select('#videoStatus').html('Video ready!');
}

// Classify the current frame.
function classify() {
  var but_pred = document.getElementById("buttonPredict");

  //Change the button look on press for visual feedback
  but_pred.className = "button_pressed"
  but_pred.textContent = "Running!";

  //Call classifier
  classifier.classify(gotResults);
}


// A util function to create UI buttons
function setupButtons() {
  buttontry = select('#trybtn')
  buttontry.mousePressed(function () {
    var cur_letter = alphabet[imageIndex];
      console.log("./model/asl/" + cur_letter + "/model.json")
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_" + cur_letter + ".svg";
      document.getElementById('current-letter-text').innerHTML = cur_letter;
      document.getElementById("letter").innerHTML = cur_letter.toLowerCase();
      classifier.load("./model/asl/" + cur_letter + "/model.json");
      imageIndex++;

      setTimeout(checkFun, 1000);
      function checkFun(){
          var results = document.getElementById('result').innerHTML;
          var R= document.getElementById('current-letter-text').innerHTML;
          var sound= document.getElementById("checkSound")

          //Changed for demo*********
          if(R=='a'){
            swal({title: 'GOOD JOB!', 
            text: 'You were correct!', 
            icon: 'success',
            button: 'Continue'});
            n=n+1
          }else{
            swal({title: "SORRY!", 
            text:"Your sign was incorrect.", 
            icon:"error",
            button: 'Continue'});
            n=n-1
          }
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
    var cur_letter = alphabet

    if (c = "a") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_A.svg";
      document.getElementById('current-letter').innerHTML = "A";
    }
    else if (c = "b") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_B.svg";
      document.getElementById('current-letter-text').innerHTML = "B";
    }
    else if (c = "c") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_C.svg";
      document.getElementById('current-letter-text').innerHTML = "C";
    }
    else if (c = "d") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_D.svg";
      document.getElementById('current-letter-text').innerHTML = "D";
    }
    else if (c = "e") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_E.svg";
      document.getElementById('current-letter-text').innerHTML = "E";
    }
    else if (c = "f") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_F.svg";
      document.getElementById('current-letter-text').innerHTML = "F";
    }
    else if (c = "g") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_G.svg";
      document.getElementById('current-letter-text').innerHTML = "G";
    }
    else if (c = "h") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_H.svg";
      document.getElementById('current-letter-text').innerHTML = "H";
    }
    else if (c = "i") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_I.svg";
      document.getElementById('current-letter-text').innerHTML = "I";
    }
    else if (c = "j") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_J.svg";
      document.getElementById('current-letter-text').innerHTML = "J";
    }
    else if (c = "k") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_K.svg";
      document.getElementById('current-letter-text').innerHTML = "K";
    }
    else if (c = "l") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_L.svg";
      document.getElementById('current-letter-text').innerHTML = "L";
    }
    else if (c = "m") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_M.svg";
      document.getElementById('current-letter-text').innerHTML = "M";
    }
    else if (c = "n") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_N.svg";
      document.getElementById('current-letter-text').innerHTML = "N";
    }
    else if (c = "o") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_O.svg";
      document.getElementById('current-letter-text').innerHTML = "O";
    }
    else if (c = "p") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_P.svg";
      document.getElementById('current-letter-text').innerHTML = "P";
    }
    else if (c = "q") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_Q.svg";
      document.getElementById('current-letter-text').innerHTML = "Q";
    }
    else if (c = "r") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_R.svg";
      document.getElementById('current-letter-text').innerHTML = "R";
    }
    else if (c = "s") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_S.svg";
      document.getElementById('current-letter-text').innerHTML = "S";
    }
    else if (c = "t") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_T.svg";
      document.getElementById('current-letter-text').innerHTML = "T";
    }
    else if (c = "u") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_U.svg";
      document.getElementById('current-letter-text').innerHTML = "U";
    }
    else if (c = "v") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_V.svg";
      document.getElementById('current-letter-text').innerHTML = "V";
    }
    else if (c = "w") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_W.svg";
      document.getElementById('current-letter-text').innerHTML = "W";
    }
    else if (c = "x") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_X.svg";
      document.getElementById('current-letter-text').innerHTML = "X";
    }
    else if (c = "y") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_Y.svg";
      document.getElementById('current-letter-text').innerHTML = "Y";
    }
    else if (c = "z") {
      document.getElementById('img-current-letter').src = "./imgASL/Sign_language_Z.svg";
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


