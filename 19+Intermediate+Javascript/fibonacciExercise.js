let fiboArray = [];

function fibonacciGenerator(n){
    if (n === 1){
        fiboArray = [0];
    } else if (n === 2){
        fiboArray = [0, 1];
    } else {
        fiboArray = [0, 1];
        if (fiboArray.length < n){
            for (var count = fiboArray.length; count  < n; count++ ){
                var fibo = fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length -2];
                fiboArray.push(fibo);
            }
        }
    }
    return fiboArray
};




console.log(fibonacciGenerator(12));