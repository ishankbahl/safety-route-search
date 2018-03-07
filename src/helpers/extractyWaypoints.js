export default function extractWaypoints(waypointsRaw){
    const waypointsExtracted = [];
    const tempWaypointsExtracted = [];
    console.log(waypointsRaw);
    waypointsRaw.map((waypointsArr, index) => {
        tempWaypointsExtracted[index] = [];
        waypointsArr.map((waypoint) => {
            tempWaypointsExtracted[index].push(waypoint.place_id);
        });
    });
    tempWaypointsExtracted.map((waypointArr, index) => {
        waypointArr.map((waypoint) => {
            const requiredIndex = tempWaypointsExtracted[index+1].indexOf(waypoint);
            if(requiredIndex !== -1){
                tempWaypointsExtracted[index+1].splice(index, 1);
                waypointsRaw[index+1].splice(index,1);
            }
        });
    });
    console.log(waypointsRaw);
}