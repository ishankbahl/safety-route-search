import findCoordinates from "./findCoordinates";
import findDistance from "./findDistance";

async function calculatePath(startingPoint, destination){
    let coordinatesS = findCoordinates(startingPoint);
    let coordinatesD = findCoordinates(destination);
    let coordinatesStarting = await coordinatesS;
    let coordinatesDestination = await coordinatesD;
    console.log(coordinatesStarting, coordinatesDestination);
}

export default calculatePath;