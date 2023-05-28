/**
 * Scope
 * var -> Global and Functional
 * let -> Global and Block level (If block, loops)
 * const -> Same as let but cannot be re initialised
 */

let scopeCheck = "Global"
function addition(a,b){
    let scopeCheck = "Function - addition"
    return a+b
}

function subtract(a,b){
    let scopeCheck = "Function - subtract"
    return a-b
};

let division = function(a,b){
    let scopeCheck = "Function - division"
    return a/b
}

let multiplication = (a,b)=> a*b

let sum = addition(23,56)
console.log(sum)

sum = division(3,4)
console.log(sum)

sum = multiplication(3,4)
console.log(sum)

console.log(scopeCheck)