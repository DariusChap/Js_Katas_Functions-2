// Kata 1

function add (a, b) {
    return a + b
}

console.log(add(2, 4))

// 2 + 4


// Kata 2

function multiply (x, y) {
    let result = 0;
    for (i = 0; 1 < y; i++) {
        result = add(x, y, result)
        return result

        


    }
     
}

console.log(multiply(2, 4))

// 2 * 4


function power (f, n) {
    let result = 0;
    for (i = 0; 1 < n; i++) {
        result = multiply(f, n, result)
        return result;


    }
    
}

console.log(power(2, 4))

// 2 * 2 * 2 * 2

function factorial (z) {
    if (z < 0)
    return -1;
    else if (z == 0)
    return 1;
    else {
        return (z * factorial(z - 1));
    }

}

console.log(factorial(5))

// 5 = 1 * 2 * 3 * 4 * 5
