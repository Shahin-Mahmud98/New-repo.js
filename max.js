const business = 750;
const minister = 820;
const army = 600;
// if (business > minister) {
//     console.log('business person er pula')
// }
// else {
//     console.log('ministerer pula is bigger');
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const larger = findLargest(354, 224);
console.log('largest is boro');

// if (business > minister && business > army) {
//     console.log('buisness is bigger');
// }
// else if (minister > business && minister > army) {
//     console.log('minster is bigger');
// }
// else {
//     console.log('army is bigger');
// }


var max = Math.max(business, minister, army);
console.log('largest is', max);