$(document).ready(function(){
    $.qrCodeReader.jsQRpath = "../js/dist/js/jsQR/jsQR.min.js";

    $(".qrcode-reader").qrCodeReader({
      audioFeedback: false,
      multiple: false,
      skipDuplicates: false,
      callback: function(codes) {
        alert(codes);
      }
  });
});
