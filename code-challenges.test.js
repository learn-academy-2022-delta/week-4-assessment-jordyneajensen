// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe("shuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", ()=> {
        var colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

//ReferenceError: shuffle is not defined


// b) Create the function that makes the test pass.

//declare a function called shuffle that will remove the first item from the array and shuffle the remaining items in the array
//declare parameter of colors to pass variables through the funtion
// iterate over the array
// use the .slice method to remove the first item in the array
// Use .sort with the Math.random to shuffle the remaining elements of the array

// Research that I found for the answer to this problem: So you’re just returning a random positive or negative number when you compare every two elements in turn, and JS will sort randomly. Each comparison is either positive or negative (very occasionally it will be 0 as well), so it will not be just ascending or descending most of the time, it will be random. You’re ignoring what the actual values in the array are, you’re just randomly returning < 0, 0 or > 0 for every pair that gets compared. From: https://forum.freecodecamp.org/t/how-does-math-random-work-to-sort-an-array/151540


// b) Create the function that makes the test pass.

const shuffle = (colors) => {
    return colors.slice(1).sort(() => Math.random()-0.5)
}

// PASS  ./code-challenges.test.js
//   shuffle
//     ✓ takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minToMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", ()=> {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minToMax(nums1)).toEqual([-8, 90])
        expect(minToMax(nums2)).toEqual([5, 109])
    })
})

// ReferenceError: minToMax is not defined

// b) Create the function that makes the test pass.

// Declare a function called minToMax.
// Set parameter to numArray.
// Use the Math.min and Math.max with the spread operator to return the min and max of each array.
// Return numArray


const minToMax = (numArray) => {
    return [Math.min(...numArray), Math.max(...numArray)]
}


// minToMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.578 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.96s.



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("unrepeatable", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", ()=> {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(unrepeatable(testArray1, testArray2, [3, 7, 5])).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// ReferenceError: unrepeatable is not defined



// b) Create the function that makes the test pass.
// Declare a function called unrepeatable.
// Set parameter to testArray
// Use .concat to concat the 2 arrays
// Iterate over the array with .filter and indexOf

 const unrepeatable = (...testArray) => {
    const combineArrays = [].concat(...testArray)
    return combineArrays.filter((value, index, array) => {
        return array.indexOf(value) === index
    })
}

// PASS  ./code-challenges.test.js
// minToMax
//   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (2 ms)
// unrepeatable
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.27 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.97s.
