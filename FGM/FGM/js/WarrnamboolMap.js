
// Initialize and add the map
function initMap() {
    // The location of Ballarat
    var warrnambool = { lat: -38.38176, lng: 142.48799 };
    // The map, centered at Geelong
    var map = new google.maps.Map(
        document.getElementById('warrnambool-map'), { zoom: 10, center: warrnambool });
    // The marker, positioned at Geelong
    var marker = new google.maps.Marker({ position: warrnambool, map: map });

    map.setOptions({ minZoom: 10, maxZoom: 15 });
}
