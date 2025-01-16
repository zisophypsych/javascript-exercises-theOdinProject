const fibonacci = function(a) {
    if (a < 0){
        return 'OOPS'
    } else{
        series = [0,1];
        for(let i = 2; i <= a; i++){
        fibo = series[i-1] + series[i-2];
        series.push(fibo);
        }
        return series[a];

    }
    
};

// console.log(fibonacci(1))
// Do not edit below this line
module.exports = fibonacci;
