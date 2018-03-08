/*global google*/

var waypoints = [];

export default async function findNearbuy(coordinates, distance, map){
    var radius = 250;
    var temp, tempData;
    for(var i = 0; i < distance / 250; i++){
        temp = function (coordinates, radius, map){
            const request = {
                location: coordinates,
                radius,
                openNow: true
            };
            var service = new google.maps.places.PlacesService(map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
            return new Promise((resolve) => {
                service.nearbySearch(request, (results, status) => {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        resolve(results); 
                    }
                    else {
                        console.log("error");
                    }
                });
            });
        };
        tempData = temp(coordinates, radius, map);
        waypoints.push(await tempData);
        radius = radius + 250;
    };

    return waypoints;
}