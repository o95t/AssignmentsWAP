$(document).ready(function () {
    $("#stop").prop("disabled", true);
    $("#animation").change(function (e) {
        stopAnimation();
        setAnimationType();
    });
    $("#start").click(function (e) {
        e.preventDefault();
        $("#stop").prop("disabled", false);
        if ($("#speed").prop("checked")) {
            animateSlow(50);
        } else {
            animateSlow(250);
        }
    });
    $("#size").change(function (e) {
        setSize();
    });
    $("#stop").click(function (e) {
        e.preventDefault();
        stopAnimation();
        $("#stop").prop("disabled", true);
    });
    $("#speed").change(function (e) {
        e.preventDefault();
        stopAnimation();
        $("#stop").prop("disabled", false);
        if ($(this).prop("checked")) {
            animateSlow(50);
        } else {
            animateSlow(250);
        }
    });
});

var intervalID = 0;
function stopAnimation() {
    clearInterval(intervalID);
    setAnimationType();
}

function setText(x, i = 0) {
    $("#animationBord").text(x[i % x.length]);
}

function animateSlow(x = 250) {
    let frames = $("#animationBord").text();
    frames = frames.split("=====\n");
    i = 0;
    intervalID = setInterval(() => {
        setText(frames, i++);
    }, x);
}

function setSize() {
    let fontSize = $("#size option:selected").val();
    console.log(fontSize)
    $("#animationBord").css("fontSize", fontSize);
}


function setAnimationType() {
    let textArea = $("#animationBord");
    let animationType = $('#animation option:selected').val();
    textArea.text(ANIMATIONS[animationType]);
}