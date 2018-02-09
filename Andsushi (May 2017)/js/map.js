function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat:-36.860460,lng:174.769126}
  });
  var image = 'http://andsushinz.cdn3.cafe24.com/images/marker.png';
  var locations = [
	  {lat: -36.868738, lng: 174.776135},
	  {lat: -36.8501120, lng: 174.7585680}
	]
  var markers = locations.map(function(location){
  	return new google.maps.Marker({
        position: location,
        map: map,
        icon: image
      });
  });
}


