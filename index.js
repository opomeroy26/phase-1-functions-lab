// // Code your solution in this file!

// function distanceFromHqInBlocks(pickup) {
//     return Math.abs(42 - pickup)
// }

// function distanceFromHqInFeet (pickup) {
//     return distanceFromHqInBlocks(pickup) *264
// }

// function distanceTravelledInFeet(start, end) {
//     return Math.abs(start - end) * 264
// }

// function calculatesFarePrice(start, end) {
//     const distance = distanceTravelledInFeet(start, end)
//     if (distance <= 400){
//         return 0
//     } else if (distance > 400 && distance <= 2000) {
//         return (distance - 400) * 0.02
//     } else if (distance > 2000 && distance <2500){
//         return 25
//     } else {
//         return 'cannot travel that far'
//     }
// }

function distanceFromHqInBlocks(pickup) {
    return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
    return (distanceFromHqInBlocks(pickup)*264);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start-end)*264);
}

function calculatesFarePrice(start, end) {
   const distance = distanceTravelledInFeet(start, end);
   if (distance < 400) {
       return 0;
   } else if (distance > 400 && distance <= 2000) {
       return (distance - 400)*.02;
   } else if (distance > 2000 && distance < 2500){
       return 25;
   } else {
       return "cannot travel that far"
   };
}
