myButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
    }
);
closePopup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);


function generateQR() {
    var inputText = document.getElementById("inputText").value;
    var qrCode = new QRCode(document.getElementById("qrCode"), {
        text: inputText,
        width: 400,
        height: 400,
        colorDark: "black",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    var canvas = document.querySelector("canvas");
    var downloadButton = document.getElementById("downloadButton");
    var downloadLink = document.getElementById("downloadLink");

    downloadButton.addEventListener("click", function () {
        var imageData = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        downloadLink.href = imageData;
    });
}
