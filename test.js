var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

let height = c.height;
let width = c.width;

let handleft ={
  currentX: 170,
  currentY: 335,
  targetY: 325,
}
let handright ={
  currentX: 539,
  currentY: 335,
  targetY: 325,
}

let eyeleft = {
  currentX: 323,
  currentY: 110,
  targetX: 323,
  targetY: 105,
};
let eyeright = {
  currentX: 377,
  currentY: 110,
  targetX: 377,
  targetY: 105,
};

let nut = {
  buttonRadius: 15,
  buttonX: 420,
  buttonY: 240,
};

// Tọa độ click chuột
let clickX = null;
let clickY = null;

document.addEventListener("click", (e) => {
  clickX = e.clientX;
  clickY = e.clientY;
  drawLaser(eyeleft.currentX, eyeleft.currentY, clickX, clickY);
  drawLaser(eyeright.currentX, eyeright.currentY, clickX, clickY);
});

function drawLaser(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = "red"; //
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}


let fps = 30;
let fpsInterval = 1000 / fps;
let then = Date.now();
let delta = 0;

let eyeHeight = 100;
let alpha = 0.1;

document.addEventListener("mousemove", (e1) => {
  eyeleft.targetX = e1.clientX;
  eyeleft.targetY = e1.clientY;
  eyeright.targetX = e1.clientX;
  eyeright.targetY = e1.clientY;
  console.log(e1);
});

function baymax() {
  setInterval(() => {
    delta = Date.now() - then;
    let fps = 1000 / delta;
    then = Date.now();
    alpha += 0.5;
    eyeHeight += Math.sin(alpha) * 10;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.font = "20px arial";
    ctx.fillText(`FPS: ${Math.round(fps * 1000) / 1000}`, 10, 40);

    // Vẽ tay trái
    ctx.beginPath();
    ctx.ellipse(handleft.currentX, handleft.currentY, 45, 135, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Vẽ tay phải
    ctx.beginPath();
    ctx.ellipse(handright.currentX, handright.currentY, 45, 135, -10, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Vẽ chân trái (hình chữ nhật)
    ctx.beginPath();
    ctx.ellipse(290, 590, 50, 110, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Vẽ chân phải (hình chữ nhật)
    ctx.beginPath();
    ctx.ellipse(400, 590, 50, 115, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // Vẽ Thân
    ctx.beginPath();
    ctx.ellipse(350, 400, 170, 250, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //lần 2
    // Vẽ chân trái (hình chữ nhật)
    ctx.beginPath();
    ctx.ellipse(290, 570, 50, 110, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.closePath();

    // Vẽ chân phải (hình chữ nhật)
    ctx.beginPath();
    ctx.ellipse(400, 570, 50, 115, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.closePath();
    // Vẽ đầu Baymax (hình oval)
    ctx.beginPath();
    ctx.ellipse(350, 130, 90, 70, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    // Vẽ đầu Baymax 2 che (hình oval)
    ctx.beginPath();
    ctx.ellipse(350, 220, 90, 70, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5"; // Màu trắng
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();

    // //miệng
    // ctx.beginPath();
    // ctx.moveTo(278, 172); // Điểm bắt đầu (50, 50)
    // ctx.quadraticCurveTo(335, 226, 423, 172); // Đoạn đường cong từ (50, 50) đến (450, 420) với điểm điều khiển (420, 440)
    // ctx.stroke(); // Vẽ đoạn đường cong
    // ctx.strokeStyle = "#F5F5F5";
    // ctx.closePath();

    // Vẽ mắt trái
    ctx.beginPath();
    ctx.arc(320, 110, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Vẽ đen mắt trái
    ctx.beginPath();
    ctx.arc(eyeleft.currentX, eyeleft.currentY, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // Vẽ mắt phải
    ctx.beginPath();
    ctx.arc(380, 110, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();

    // Vẽ đen mắt phải
    ctx.beginPath();
    ctx.arc(eyeright.currentX, eyeright.currentY, 6, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // // Vẽ miệng (hình U ngược)
    // ctx.beginPath();
    // ctx.moveTo(80, 135);
    // ctx.quadraticCurveTo(100, 145, 120, 135);
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 5;
    // ctx.stroke();

    // Vẽ nút trên ngực
    let buttonRadius = 15; // Kích thước ban đầu của nút
    ctx.beginPath();
    ctx.arc(nut.buttonX, nut.buttonY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#F5F5F5";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    // // Vẽ vạch đen ở giữa thân
    // ctx.beginPath();
    // ctx.moveTo(290, 280);
    // ctx.lineTo(410, 280);
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 4;
    // ctx.stroke();

    // Vẽ dải đen giữa mắt
    ctx.beginPath();
    ctx.moveTo(327, 110);
    ctx.lineTo(371, 111);
    ctx.lineWidth = 3;
    ctx.fillStyle = "black";
    ctx.stroke();
    ctx.closePath();


    //



    //eyeright
    if (eyeright.currentX < eyeright.targetX) {
      eyeright.currentX += 1;
    } else if (eyeright.currentX > eyeright.targetX) {
      eyeright.currentX -= 1;
    }
    if (eyeright.currentX > 385) {
      eyeright.currentX -= 1;
    }
    if (eyeright.currentX < 375) {
      eyeright.currentX += 1;
    }

    if (eyeright.currentY < eyeright.targetY) {
      eyeright.currentY += 1;
    } else if (eyeright.currentY > eyeright.targetY) {
      eyeright.currentY -= 1;
    }
    if (eyeright.currentY > 105) {
      eyeright.currentY -= 1;
    }
    if (eyeright.currentY < 115) {
      eyeright.currentY += 1;
    }

    // let eyeleft = {
    //   currentX: 323,
    //   currentY: 110,
    //   targetX: 323,
    //   targetY: 105,
    // };
    // let eyeright = {
    //   currentX: 377,
    //   currentY: 110,
    //   targetX: 377,
    //   targetY: 105,
    // };

    //eyeleft
    if (eyeleft.currentX < eyeleft.targetX) {
      eyeleft.currentX += 1;
    } else if (eyeleft.currentX > eyeleft.targetX) {
      eyeleft.currentX -= 1;
    }
    if (eyeleft.currentX > 325) {
      eyeleft.currentX -= 1;
    }
    if (eyeleft.currentX < 315) {
      eyeleft.currentX += 1;
    }

    if (eyeleft.currentY < eyeleft.targetY) {
      eyeleft.currentY += 1;
    } else if (eyeleft.currentY > eyeleft.targetY) {
      eyeleft.currentY -= 1;
    }
    if (eyeleft.currentY > 105) {
      eyeleft.currentY -= 1;
    }
    if (eyeleft.currentY < 115) {
      eyeleft.currentY += 1;
    }
  }, fpsInterval);
}

baymax();
