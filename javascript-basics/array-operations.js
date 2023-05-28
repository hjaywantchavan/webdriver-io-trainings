
let otherMarks = new Array(20,"Harshal",45,12,37,80) // defining array with values
let allMarks = [20,30,40,50,60]


slicedMarksArray = allMarks.slice(1,allMarks.length) // no errors even when we provide endValue (100) more than the actual length
console.log(slicedMarksArray)