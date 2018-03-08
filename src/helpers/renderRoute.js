/*global google*/

export default function renderRoute(destination, waypoints, origin){
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    const finalWaypoints = [];

    waypoints.map((waypoint) => {
        finalWaypoints.push({
            location: waypoint,
            stopover: true,
        });
    });
    return new Promise((resolve) => {
        directionsService.route({
            origin,
            destination,
            waypoints: finalWaypoints,
            optimizeWaypoints: true,
            travelMode: 'WALKING'
        }, function(response, status) {
            if (status === 'OK') {
               resolve(response);
            }
        })});
}