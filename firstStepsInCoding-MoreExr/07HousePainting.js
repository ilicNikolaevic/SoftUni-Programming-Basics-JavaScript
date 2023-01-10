function housePainting(input){
    let heightHouse = Number(input[0]);
    let lengthSideHouse = Number(input[1]);
    let heightTriangle = Number(input[2]);

    let sideWalls = (heightHouse*lengthSideHouse - 1.5*1.5)*2;
    let frontAndBackWalls = (heightHouse*heightHouse * 2)-1.2*2;
    let sumAllWalls = sideWalls+frontAndBackWalls;
    let greenPaint = sumAllWalls / 3.4;
    let roofSide = heightHouse*lengthSideHouse*2;
    let triangleWalls = heightHouse*heightTriangle;
    let sumAllRoof = roofSide+triangleWalls;
    let redPaint = sumAllRoof / 4.3;
    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"])




