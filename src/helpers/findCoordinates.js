/*global google*/

export default function findCoordinates(str){
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': str}, function(results, status) {
        console.log(status);
        if (status === 'OK') {
            console.log(results[0].geometry.location);
            return results[0].geometry.location;
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}