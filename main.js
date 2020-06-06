// Kata 1

function add (a, b) {
    return a + b
}

console.log(add(2, 4))

// 2 + 4


// Kata 2

function multiply (x, y) {
    let result = 0;
    for (let i = 0; i < y; i++) {
        result = add(result, x)
        
        
        
        
    }
    return result
    
}

console.log(multiply(2, 4))

// 2 * 4


function power (f, n) {
    let result1 = 1;
    for (let i = 0; i < n; i++) {
        result1 = multiply(result1, f)
        
        
    }
    return result1
    
}

console.log(power(3, 3))

// 2 * 2 * 2 * 2

function factorial (z) {
    let result2 = z;
    for (let i = 1; i < z; i++) {
        result2 = multiply(result2, i)
    }
    return result2

}

console.log(factorial(5))

// 5 = 1 * 2 * 3 * 4 * 5

function fibonacci (c) {
    let d = 0;
    let e = 1;
    let result3 = add(d, e);
    for (let i = 2; i < c; i++) {
        result3 = add(d, e)
        d = e;
        e = result3;
        
        
    }
    return result3

}

console.log(fibonacci(10))