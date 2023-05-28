// Array declaration

let marks = Array(6) // defining length
let otherMarks = new Array(20,"Harshal",45,12,37,80) // defining array with values
let allMarks = [20,30,40,50,60]
console.log(otherMarks)
console.log(marks)
console.log(allMarks)

// Traversing the Array
console.log(otherMarks[3])
console.log(marks[3]) // output -> undefined

// Index not available scenario
console.log(marks[10]) // output -> undefined

// Get elements in array
console.log(otherMarks.length) // object with values
console.log(marks.length) // answer is same even though elements are not added in array

// Increase | Decrease size of Array at Runtime
/*
1. Push method will add element at the end of an array
2. Pop method will delete element at the end of an array
3. unshift will add element at the beginning of an array
4. shift method to delete element at the start of an array
*/
otherMarks.push(88)
console.log(otherMarks)
console.log(otherMarks.length)
otherMarks.unshift(1002)

// Pop method when Element not available in Array
console.log("Popping elements")
console.log(otherMarks.pop())
console.log(otherMarks)


// Get index of an element in an array
console.log("Get index of an element in an array")
console.log(otherMarks.indexOf(12)) // Returns -1 if element not available in Array

// Verify if element is available in array
console.log(otherMarks.includes(30)) // Returns true or false