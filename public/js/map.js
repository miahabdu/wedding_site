// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 12,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(42.765304, -84.483983), // 6th Ave, New York, NY 23458

    // Disables the default Google Maps UI components
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: true,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles:
        [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var ceremonyString = '<div id="content" style="text-align:left;">'+
    '<h4 id="firstHeading" class="firstHeading" style="margin-bottom: 5px;">MSU Horticulture Gardens</h4>'+
    '<div class="row">'+
    '<div class="col-lg-7">'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-map-marker"></i> 1066 Bogue St, East Lansing, MI 48824</p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-globe"></i> <a href="https://hrt.msu.edu">hrt.msu.edu</a></p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-phone"></i> (517) 355-5191</p>'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<p style="margin-right: 20px;font-size: 12px;"><img src="img/msu-garden.jpg" class="img-responsive" width=175></p>'+
    '</div>'+
    '</div>';

  var ceremony_infowindow = new google.maps.InfoWindow({
    content: ceremonyString
  });

  var receptionString = '<div id="content" style="text-align:left;">'+
    '<h4 id="firstHeading" class="firstHeading" style="margin-bottom: 5px;">Eagle Eye Banquet Center</h4>'+
    '<div class="row">'+
    '<div class="col-lg-7">'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-map-marker"></i> 15500 Chandler Rd #3, Bath Twp, MI 48808</p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-globe"></i> <a href="http://www.hawkhollow.com">hawkhollow.com</a></p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-phone"></i> (517) 641-4570</p>'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<p style="margin-right: 20px;font-size: 12px;"><img src="img/eagle-eye.jpg" class="img-responsive" width=175></p>'+
    '</div>'+
    '</div>';

  var reception_infowindow = new google.maps.InfoWindow({
    content: receptionString
  });

  var hotelString = '<div id="content" style="text-align:left;">'+
    '<h4 id="firstHeading" class="firstHeading" style="margin-bottom: 5px;">Fairfield Inn & Suites</h4>'+
    '<div class="row">'+
    '<div class="col-lg-7">'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-map-marker"></i> 3320 Preyde Blvd, Lansing, MI 48912</p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-globe"></i> <a href="http://www.marriott.com">marriott.com</a></p>'+
    '<p style="margin-bottom: 5px;font-size: 12px;"><i class="fa fa-phone"></i> (517) 374-6500</p>'+
    '</div>'+
    '<div class="col-lg-5">'+
    '<p style="margin-right: 20px;font-size: 12px;"><img src="img/fairfield.jpg" class="img-responsive" width=175></p>'+
    '</div>'+
    '</div>';

  var hotel_infowindow = new google.maps.InfoWindow({
    content: hotelString
  });

  var image = 'img/map-marker.png';
  var myLatLng = new google.maps.LatLng(42.7342809, -84.49627935); // 6th Ave, New York, NY 23458
  var ceremonyMarker = new MarkerWithLabel({
    position: myLatLng,
    map: map,
    labelContent: 'Ceremony',
    labelClass: 'label'
  });
  ceremonyMarker.addListener('click', function() {
    ceremony_infowindow.open(map, ceremonyMarker);
  });

  var receptionMarker = new MarkerWithLabel({
    position: new google.maps.LatLng(42.790504,-84.4868587),
    map: map,
    labelContent: 'Reception',
    labelClass: 'label'
  });

  receptionMarker.addListener('click', function() {
    reception_infowindow.open(map, receptionMarker);
  });

  var hotelMarker = new MarkerWithLabel({
    position: new google.maps.LatLng(42.763906,-84.513386),
    map: map,
    labelContent: 'Hotel',
    labelClass: 'label'
  });

  hotelMarker.addListener('click', function() {
    hotel_infowindow.open(map, hotelMarker);
  });
}