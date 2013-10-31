if (navigator.geolocation) {
    console.log("Geolocation is available ");
}
function onSuccess (position) {
    
}

function onError(error) {
    alert("Error on GPS" +  error);
}


function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

function distanceToCinema(cinemaPostion) {
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat + ' ' + lon);
    console.log(getDistance(lat, lon, cinemaPostion.lat, cinemaPostion.lon));

    });
}


