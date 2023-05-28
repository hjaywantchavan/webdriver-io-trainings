// Sorting array with Strings
    let stringItems = ["Banana", "Mango", "Apple", "Strawberry"]
    stringItems.sort();
    console.log(stringItems)
    // Apple reverse() method after sorting for descending order

// Sorting array with Numbers
    let intItems = [45,0,32,78,90,12,78,24,566]
    // Ascending
    intItems.sort((a,b)=>a-b)
    console.log(intItems)

    // Descending
    intItems.sort((a,b)=>b-a)
    console.log(intItems)
    /**
     *  Negative Value ( a < b) => a will be placed before b
        zero value (a == b) => No Change
        Positive Value (a > b ) => a will be placed after b
    */


