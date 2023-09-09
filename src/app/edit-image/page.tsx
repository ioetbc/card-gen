"use client";
import {useState} from "react";

export default function App() {
  const [originalImage, setOriginalImage] = useState("");

  const fileSelected = (event) => {
    const file = event.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const minVal = Math.min(img.width, img.height);
      setup(img, 0, 0, minVal, minVal);
    };
  };

  const setup = (img, x, y, width, height) => {
    const node = document.getElementById("PictureLayer");
    const maskNode = document.getElementById("MaskLayer");
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
    if (maskNode && maskNode.parentNode) {
      maskNode.parentNode.removeChild(maskNode);
    }

    const can = document.createElement("canvas");
    can.id = "PictureLayer";
    can.width = window.innerWidth * 0.45;
    can.height = window.innerWidth * 0.45;
    const outerCanvas = document.getElementById("outer-canvas");
    outerCanvas.appendChild(can);

    const ctx = can.getContext("2d");

    ctx?.drawImage(img, x, y, width, height, 0, 0, can.width, can.height);
    ctx.lineCap = "round";
    ctx.lineWidth = 25;
    ctx.globalCompositeOperation = "destination-out";

    const maskCanvas = document.createElement("canvas");
    maskCanvas.id = "MaskLayer";
    maskCanvas.width = window.innerWidth * 0.45;
    maskCanvas.height = window.innerWidth * 0.45;
    const maskCtx = maskCanvas.getContext("2d");
    maskCtx.fillStyle = "black";
    maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
    outerCanvas.appendChild(maskCanvas);

    let isDrawing = false;

    const startDrawing = (event) => {
      isDrawing = true;
      const pos = getPos(event);
      points.setStart(pos.x, pos.y);
    };
    const stopDrawing = () => {
      isDrawing = false;
    };
    const draw = (event) => {
      if (!isDrawing) return;
      const pos = getPos(event);
      points.newPoint(pos.x, pos.y);
      maskCtx.strokeStyle = "white";
      maskCtx.lineCap = "round";
      maskCtx.lineWidth = 25;
      maskCtx.beginPath();
      maskCtx.moveTo(points.lastPoint().x, points.lastPoint().y);
      maskCtx.lineTo(pos.x, pos.y);
      maskCtx.stroke();
    };

    const points = (function () {
      var queue = [],
        qi = 0;

      function clear() {
        queue = [];
        qi = 0;
      }

      function setStart(x, y) {
        clear();
        newPoint(x, y);
      }

      function newPoint(x, y) {
        queue.push([x, y]);
      }

      function lastPoint() {
        if (queue.length === 0) return null;
        return {x: queue[queue.length - 1][0], y: queue[queue.length - 1][1]};
      }

      function tick() {
        let k = 20;
        if (queue.length - qi > 1) {
          ctx.beginPath();
          if (qi === 0) ctx.moveTo(queue[0][0], queue[0][1]);
          else ctx.moveTo(queue[qi - 1][0], queue[qi - 1][1]);

          for (++qi; --k >= 0 && qi < queue.length; ++qi) {
            ctx.lineTo(queue[qi][0], queue[qi][1]);
          }
          ctx.stroke();
        }
      }

      setInterval(tick, 50);

      return {
        setStart: setStart,
        newPoint: newPoint,
        lastPoint: lastPoint,
      };
    })();

    can.addEventListener("mousedown", startDrawing);
    can.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDrawing);

    function getPos(e) {
      const rect = can.getBoundingClientRect();
      return {x: e.clientX - rect.left, y: e.clientY - rect.top};
    }
    setOriginalImage(can.toDataURL());
  };

  const downloadOriginal = () => {
    const node = document.getElementById("PictureLayer");
    if (!node) return;
    const link = document.createElement("a");
    link.download = "original.png";
    link.href = originalImage;
    link.click();
  };

  const downloadMask = () => {
    const node = document.getElementById("MaskLayer");
    if (!node) return;
    const link = document.createElement("a");
    link.download = "mask.png";
    link.href = node.toDataURL();
    link.click();
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>DALL-E 2 Image Mask Editor</h2>
      <p>
        1. <input type="file" accept="image/*" onChange={fileSelected} />
      </p>
      <div>
        <p>
          2. Use mouse to erase parts of the photo that should be edited by AI
        </p>
        <div
          style={{
            width: "80%",
            height: "80%",
            borderStyle: "solid",
          }}
          id="outer-canvas"
        />
      </div>
      <div>
        <p>3. Download Images</p>
        <div>
          <button style={{margin: 10}} onClick={downloadOriginal}>
            Download Original
          </button>
        </div>
        <div>
          <button style={{margin: 10}} onClick={downloadMask}>
            Download Mask
          </button>
        </div>
      </div>
    </div>
  );
}
