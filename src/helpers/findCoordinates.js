/*global google*/

export default function findCoordinates(str){
    var geocoder = new google.maps.Geocoder();
    return new Promise(resolve => {
    geocoder.geocode( { 'address': str}, function(results, status) {
        if (status === 'OK') {
            resolve(results[0].geometry.location);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
})
}