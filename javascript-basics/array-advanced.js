let otherMarks = new Array(20,"Harshal",45,12,37,80) // defining array with values
let allMarks = [20,30,40,50,60,23,56,49,91, 22, 56, 38]

// Reduce -> Traverse all elements
    let totalMarks = allMarks.reduce((totalMarks,iterator) => totalMarks+iterator , 0)
    console.log("Total of All marks in an array "+totalMarks)

// Filter -> Returns array of elements with provided filter
    // Only filter Logic
    let filteredArray = allMarks.filter(iterator=>iterator%2==0)
    console.log("Filtered Array with Marks divisible by 2 = ["+filteredArray+"]")

    // Reduce + Filter Example
    totalMarks = allMarks.filter(iterator=>iterator%10==0).reduce((totalMarks,iterator)=> totalMarks+iterator,0)
    console.log("Total of marks divisible by 10 = "+totalMarks)

// Maps - Perform one common operation on all array elements
    // Only maping logic
    let mappedArray = allMarks.map(iterator=> iterator*2)
    console.log("Mapped Array ["+mappedArray+"]")

    // Scenario: Find out total of all elements which are divisible by 10 after multiplying it by 2
    let totalOfDivisibleby10 = allMarks.filter(iterator=>iterator%10==0).map(iterator=>iterator*2).reduce((totalMarks,iterator)=> iterator+totalMarks,0)
    console.log(totalOfDivisibleby10)


