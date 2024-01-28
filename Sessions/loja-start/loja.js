let rrafshi = document.createElement("canvas");
rrafshi.width = 512;
rrafshi.height = 480;

document.body.appendChild(rrafshi);

let ctx = rrafshi.getContext("2d");
let bgImage = new Image();
bgImage.src = "images/background.png";
bgImage.onload = function () {
    bgready
}
bgImage.onload = function () {
    ctx.drawImage(bgImage, 0, 0);
}

let macaReady = false;
let maca = {};
maca.x = 100;
maca.y = 100;
let macaImage = new Image();
macaImage.src = "images/cat.png";
macaImage.onload = function () {

}

let miuReadu = false;
let miu = {};
let miuImage = new Image();
miuImage.src = "images/mouse.png";
miuImage.onload = function () {
    ctx.drawImage(miuImage, 100, 300);
    let miuReady = true;
}

let keysDown = {};

document.addEventListener("keydown",
    function (e) {
        keysDown[e.key] = true;
        console.log('Key pressed ' + e.key);
    });

document.addEventListener("keyup", function (e) { keysDown = {}; });

let update = function () {
    if ('ArrowRight' in keysDown) {
        maca.x += 3;
        ctx.drawImage(macaImage, maca.x, maca.y);
    }
    if ('ArrowDown' in keysDown) {
        maca.y += 3;
        ctx.drawImage(macaImage, maca.x, maca.y);
    }
    if ('ArrowUp' in keysDown) {
        maca.y -= 3;
        ctx.drawImage(macaImage, maca.x, maca.y);
    }
    if ('ArrowLeft' in keysDown) {
        maca.x -= 3;
    }
}

let render = function () {
    if (macaReady == true) {
        ctx.drawImage(macaImage, 100, 100);
    }
    update();

}

setInterval(render, 1000);
