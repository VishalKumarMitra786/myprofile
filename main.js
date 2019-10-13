var pdfUrl = "https://vishalkumarmitra786.github.io/myprofile/resume.pdf";

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: pdfUrl,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

var qrcode2 = new QRCode(document.getElementById("qrcode2"), {
    text: pdfUrl,
    width: 150,
    height: 150,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});