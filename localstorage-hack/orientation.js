if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation are supported!");
}

function onChange(eventData) {
    
    var tiltLR = eventData.gamma;
    var tiltFP = eventData.beta;
    var direction = eventData.alpha;

    // console.log('tiltLR data: ' + tiltLR);
    // console.log('tiltFP data: ' + tiltFP);
    // console.log('direction data: ' + direction);

    var logo = document.querySelector('#logo');

    logo.style.webkitTransform = "rotateX(" + tiltFP * 10 + "deg)";
    logo.style.webkitTransform = "rotateY(" + tiltLR * 10 + "deg)";
    // logo.style.webkitTransform = "rotate(" + tiltLR * 10 + "," + tiltFP * 10 + "," + direction * 10 + ",90deg)";


}

window.addEventListener('deviceorientation', onChange, false);

