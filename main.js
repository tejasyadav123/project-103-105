Webcam.set({
    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");
Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
    })
}
classfier = ml5.imageClassfier("https://teachablemachine.withgoogle.com/models/e53R4RJs5/model.json", modeloaded)
function modeloaded() {
    console.log("modeloaded")
}

function check() {
    img = document.getElementById("cuptured_image")
    classfier.classify(img, gotresult)
}

function gotresult(error, result){
    if (error) {
        console.log(error)
    }else{
        console.log(result)
        document.getElementById("result_object_name").innerHTML = result[0].label
        document.getElementById("result_object_accuracy").innerHTML = result[0].confird.toFixed(3);
    }
}