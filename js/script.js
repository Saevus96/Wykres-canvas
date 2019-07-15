function radianAngle(angle) {
    return radians = (Math.PI / 180) * angle;
}

const canvas = document.querySelector(".hg-diagram");
const ctx = canvas.getContext('2d');

function init() {
    //lewe skrzydło
    ctx.fillStyle = "#9eceff"
    ctx.fillRect(41, 47, 108, 10);
    ctx.strokeStyle = "#9eceff";
    ctx.fillStyle = "#9eceff";
    ctx.beginPath();
    ctx.arc(41.5, 52, 4, radianAngle(0), radianAngle(360), true);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //tekst lewe skrzydło
    ctx.font = " 10px Arial";
    ctx.fillStyle = "#ecf4fc"
    ctx.fillText("niskie", 80, 55);
    ctx.closePath();

    //podziałka góra - lewa
    ctx.font = "11px Arial";
    ctx.fillStyle = "#1e1e1e"
    ctx.fillText("140 mm HG", 120, 38);
    ctx.closePath();

    //podziałka dół - lewa
    ctx.font = "11px Arial";
    ctx.fillStyle = "#1e1e1e"
    ctx.fillText("90 mm HG", 125, 77);
    ctx.closePath();

    //środek
    ctx.fillStyle = "#0166da"
    ctx.fillRect(151, 47, 228, 10);
    ctx.closePath();

    //tekst środek
    ctx.font = " 10px Arial";
    ctx.fillStyle = "#ecf4fc"
    ctx.fillText("średnie", 245, 55);
    ctx.closePath();

    //prawe skrzydło
    ctx.fillStyle = "#9eceff"
    ctx.fillRect(381, 47, 108, 10);
    ctx.fillStyle = '#9eceff';
    ctx.beginPath();
    ctx.arc(488.5, 52, 4, radianAngle(0), radianAngle(360), false);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    //tekst prawe skrzydło
    ctx.font = "bold 10px Arial";
    ctx.fillStyle = "#ecf4fc"
    ctx.fillText("wysokie", 415, 55);
    ctx.closePath();

    //podziałka góra
    ctx.font = " 11px Arial";
    ctx.fillStyle = "#1e1e1e"
    ctx.fillText("180 mm HG", 348, 38);
    ctx.closePath();

    //podziałka dół
    ctx.font = "11px Arial";
    ctx.fillStyle = "#1e1e1e"
    ctx.fillText("110 mm HG", 348, 77);
    ctx.closePath();
}

init();


const imageUp = new Image();
imageUp.addEventListener('load', function () {

    ctx.drawImage(imageUp, 144, 32);
});
imageUp.src = '../images/pointer.png';

const imageDown = new Image();
imageDown.addEventListener('load', function () {

    ctx.drawImage(imageDown, 40, 52);
});
imageDown.src = '../images/pointerDown.png';

const form = document.querySelector(".form");

form.addEventListener('change', function (e) {
   // e.preventDefault();
    let up = this.pointerUp.value;
    let down = this.pointerDown.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    let x = parseInt(151 + (parseInt(down) - 90) * 7.5);
    let xup = parseInt(151 + (parseInt(up) - 140 ) * 6.5);

    ctx.drawImage(imageDown, x, 52);
    ctx.drawImage(imageUp, xup, 32);
    console.log(x);
    console.log(xup);
})