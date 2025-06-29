const button = document.querySelector(".generate");
const button2 = document.querySelector(".clear");
button.addEventListener("click", () => {
  const url = document.getElementById("urlInput").value;
  const qrDiv = document.getElementById("qrcode");

  if (!url.trim()) {
    //for url check
    alert("Please enter a valid URL.");
    return;
  }

  qrDiv.innerHTML = ""; // Clear old QR

  QRCode.toCanvas(url, { width: 200 }, function (error, canvas) {
    if (error) {
      console.error(error);
      alert("Could not generate QR code.");
      return;
    }
    qrDiv.appendChild(canvas);
  });
});

const containers = document.querySelectorAll(".container"); // Make sure your containers have the 'container' class
document
  .getElementById("darkModeToggle")
  .addEventListener("change", function () {
    document.body.style.backgroundColor = this.checked ? "black" : "";
    button.style.backgroundColor = this.checked ? "blue" : "";
    button2.style.backgroundColor = this.checked ? "blue" : "";
  });
button2.addEventListener("click", () => {
  const qrDiv = document.getElementById("qrcode");
  qrDiv.innerHTML = "";
  document.getElementById("urlInput").value = "";
});
