/*global google*/

export default async function findNearbuy(coordinates, distance){
    var radius = 250;
    var temp;
    const waypoints = [];
    for(var i = 0; i < distance % 250; i++){
        temp = callPlacesAPI(coordinates, radius);
        waypoints.push(await temp);
        distance = distance + 250; 
    }

    return waypoints;
}

function callPlacesAPI(coordinates, radius){
    const request = {
        location: coordinates,
        radius,
        openNow: true
    };
    var service = new google.maps.places.PlacesService();
    return new Promise((resolve) => {
        service.nearbySearch(request, (results, status) => {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                resolve(results); 
            }
        });
    });
}