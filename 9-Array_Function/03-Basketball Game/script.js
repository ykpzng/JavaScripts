
const scoreJohn = [50, 100, 103];
const scoreMike = [129, 94, 123];
const scoreMary = [97, 100, 105];

function averageCalculate(arr) {
    average = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }
    return Math.floor(average / arr.length);
}

function compareScore(avrJhn, avrMk, avrMr) {

    if (avrJhn > avrMk && avrJhn > avrMr) {
        console.log('John\'s team wins with ' + avrJhn + ' points');
    } else if (avrMk > avrJhn && avrMk > avrMr) {
        console.log('Mike\'s team wins with ' + avrMk + ' points');
    } else if (avrMr > avrJhn && avrMr > avrMk) {
        console.log('Mary\'s team wins with ' + avrMr + ' points');
    } else {
        console.log('There is a draw');
    }

}

compareScore(averageCalculate(scoreJohn), averageCalculate(scoreMike), averageCalculate(scoreMary));




/*


if (avrJhn > avrMk) {
        console.log('John\'s team wins with ' + avrJhn + ' points');
    } else if (avrMk > avrJhn) {
        console.log('Mike\'s team wins with ' + avrMk + ' points');
    } else {
        console.log('There is a draw');
    }
*/