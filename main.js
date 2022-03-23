Webcam.set({
    width: 300,
    height: 350,
    image_format: 'jpeg',
    image_quality: 90
});
var camera = document.getElementById("camera");
Webcam.attach(camera);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/H_MrtorjU/model.json', modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img src="' + data_uri + '" id = "captured_image">';
    });
}