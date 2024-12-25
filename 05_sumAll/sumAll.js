const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || num1 !== Math.floor(num1) || num2 !== Math.floor(num2)) {
        return "ERROR"
    } else {
        if (typeof(num1) === 'number' && typeof(num2) === 'number'){

            if (num1 > num2) {
                smallerNum = num2;
                largerNum = num1;
            } else {
                smallerNum = num1;
                largerNum = num2;
            }
    
            let sum = 0;
            for (; smallerNum <= largerNum; smallerNum++) {
                sum += smallerNum;
            }
            return sum;
        } else {
            return "ERROR"
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
