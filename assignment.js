//1. Feet to Mile Converter

function feetToMile(feet){
    var mile = feet/5280;
    mile = mile.toFixed(2);
    return mile;
}
var totalMile = feetToMile(5280);
console.log(totalMile);

//2. Wood Calculator

function woodCalculator(chair,table,bed){
    var needForChair = chair * 1;
    var needForTable = table * 3;
    var needForBed = bed * 5;
    var totalWood = needForChair+needForTable+needForBed;
    return totalWood;
}
var needTotalWood = woodCalculator(2,2,2);
console.log(needTotalWood);

//3. Brick Calculator

function brickCalculator(floor){
    var forTenFloor = 150000;
    var forTwentyFloor=270000;
    if(floor<=0){
        console.log("This floor is not possible");
    }
    else if (floor<=10){
        var totalBricks = floor*15000;
    }
    else if (floor >=11 && floor<=20){
        var floorCount = floor-10;
        var forUpToTen=floorCount*12000;
        var totalBricks = forUpToTen+forTenFloor;
    }
    else{
        var floorCount = floor-20;
        var forUpToTwenty = floorCount*10000;
        var totalBricks = forUpToTwenty+forTwentyFloor;
    }
    return totalBricks;
}
var needBricks = brickCalculator(11);
console.log(needBricks);

//4.Tiny Friend Name

function tinyFriend(name){
    var smallestName =name[0];
    for (var i=0;i<name.length;i++){
        var currentName = name[i];
        if(currentName.length<smallestName.length){
            smallestName=currentName;
        }
    }
    return smallestName;
}
var name = ["Shuvo", "Lichon", "Hridoy", "Tareq", "Opu"];
var tinyFriendName = tinyFriend(name);
console.log(tinyFriendName);



