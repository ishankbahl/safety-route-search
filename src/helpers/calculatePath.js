import findCoordinates from "./findCoordinates";
import findDistance from "./findDistance";
import findNearbuy from "./findNearbuy";
import extractWaypoints from "./extractWaypoints";
import calculateWaypoints from "./calculateWaypoints";
import renderRoute from "./renderRoute";

async function calculatePath(startingPoint, destination, map){
    console.log(map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
    let coordinatesS = findCoordinates(startingPoint);
    let coordinatesD = findCoordinates(destination);
    let coordinatesStarting = await coordinatesS;
    let coordinatesDestination = await coordinatesD;
    const actualDistance = findDistance(coordinatesStarting, coordinatesDestination)*1000;
    const waypointsRaw = await findNearbuy(coordinatesStarting, actualDistance, map);
    //const waypointsExtracted = extractWaypoints(waypointsRaw);
    const finalWaypoints = calculateWaypoints(waypointsRaw, coordinatesDestination);
    const directions = renderRoute(coordinatesDestination, finalWaypoints, coordinatesStarting);
    return await directions;
}

export default calculatePath;