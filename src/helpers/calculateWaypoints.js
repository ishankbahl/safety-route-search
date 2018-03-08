import findDistance from "./findDistance";

export default function calculateWaypoints(arr, endCoordinates){
    const returningArr = [];
    var smallest, i = 0, pos, ans;
    console.log(arr, arr.length);
    for(; i < arr.length; i++){
        if(arr[i] === undefined)
            continue;
        smallest = 500000;
        pos = -1;
        Object.keys(arr[i]).map((key) => {
            ans = findDistance(arr[i][key].geometry.location, endCoordinates);
            if(smallest > ans){
                smallest = ans;
                pos = key;
            };
        });
        returningArr.push(arr[i][pos].geometry.location);
    }
    return returningArr;
}