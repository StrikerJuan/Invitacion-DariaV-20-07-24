document.addEventListener("DOMContentLoaded", function () {
  
    //   Archivo de audio
    var audio = document.getElementById("audio");
    if (audio) {
        audio.volume = 0.3;
    } else {
        console.error("No se encontró el elemento de audio.");
    }

});
