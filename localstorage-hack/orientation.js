if (window.DeviceOrientationEvent) {
  console.log("DeviceOrientation are supported!");
}

function onChange(eventData) {
    var tiltLR = eventData.gamma;
    var tiltFP = eventData.beta;
    var direction = eventData.alpha;

    console.log('tiltLR data: ' + tiltLR);
    console.log('tiltFP data: ' + tiltFP);
    console.log('direction data: ' + direction);
}

window.addEventListener('DeviceOrientation', onChange, false);

