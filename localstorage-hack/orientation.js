if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation are supported!");
}

function onChange(eventData) {
    
    var y = eventData.gamma;
    var x = eventData.beta;
    var z = eventData.alpha;

    // console.log('tiltLR data: ' + tiltLR);
    // console.log('tiltFP data: ' + tiltFP);
    // console.log('direction data: ' + direction);

    var logo = document.querySelector('#logo');

    // logo.style.webkitTransform = "rotateX(" + y * 10 + "deg)";
     //logo.style.webkitTransform = "rotateY(" + x * 10 + "deg)";
    // logo.style.webkitTransform = "rotate(" + x * 10 + "deg," + y * 10 + "deg," + z * 10 + "deg, a)";


}

window.addEventListener('deviceorientation', onChange, false);

    