// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    
    if (array.length > minSize){
        return array
    }
    while (array.length != minSize){
        array.push(value);
        // array = array.push(value)
        // return array
    }
    return array
}

exports.pad = pad;

// console.log(pad(my_array, 0))
console.log(pad([1, 2, 3], 10))
console.log(pad([1, 2, 3], 5, 'apple'))

// console.log(pad([1, 2, 3], 5, "apple"))
//     output -> [1, 2, 3, 'apple', 'apple']