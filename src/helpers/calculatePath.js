import findCoordinates from "./findCoordinates";
import findDistance from "./findDistance";
import findNearbuy from "./findNearbuy";
import extractWaypoints from "./extractyWaypoints";

async function calculatePath(startingPoint, destination){
    let coordinatesS = findCoordinates(startingPoint);
    let coordinatesD = findCoordinates(destination);
    let coordinatesStarting = await coordinatesS;
    let coordinatesDestination = await coordinatesD;
    const actualDistance = findDistance(coordinatesStarting, coordinatesDestination)*1000;
    var multiplier = 250;
    const waypointsRaw = findNearbuy(coordinatesStarting, multiplier);
    const waypointsExtracted = extractWaypoints(waypointsRaw);
}

export default calculatePath;