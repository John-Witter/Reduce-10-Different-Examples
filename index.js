const people = [
    {id: '1', name: 'Leigh', age: 35},
    {id: '2', name: 'Jenny', age: 30},
    {id: '3', name: 'Heather', age: 28},
];

let result;


// count

result = people.reduce((acc, person) => {
    return acc + 1
}, 0);

console.log('count result:', result)




// sum ages

result = people.reduce((acc, person) => {
    // acc = the current sum
    return acc + person.age;
}, 0);

console.log('sum ages result:', result)



// array of names (map)
// (map() would typically be easier to use here)
result = people.reduce((acc, person) => {
    // acc = current name
    return [...acc, person.name] // return all previous names + new name
}, [])

console.log('array of names (map) result:', result, '\n');



// convert to id => person lookup (dict)
// instead of looping through the array and searching for id, 
    // convert the array to a dict w/id = to the key and obj = to the value
result = people.reduce((acc, person) => {
    // [person.id] dynamically set id as key
    return { ...acc, [person.id]: person };
}, {});

console.log("convert to id => person lookup (dict) result:", result);
console.log("result['3']:", result['3'], '\n');



// max age
result = people.reduce((acc, person) => {
    // start @ null "in case the numbers are all negative and 0 would be max"
    if (acc === null || person.age > acc) return person.age; 
    return acc // else return current max
}, null);

console.log('max age result:', result);


// min age
result = people.reduce((acc, person) => {
    if (acc === null || person.age < acc) return person.age
    return acc
}, null)

console.log('min age result:', result);



// find by name
result = people.reduce((acc, person) => {
    // probably less confusing to use find(), loops over each el even after hit
    // if someone is found, return them
    if (acc !== null) return acc;

    // right person not found
    if (person.name === 'Leigh') return person;

    return null; // keep looking

}, null)

console.log('find by name:', result);



// all over 18
result = people.reduce((acc, person) => {
    // if it's already been turned false, return false
    if (!acc) return false; // false if 1 person < 18

    return person.age > 18;
}, true);

console.log('all over 18:', result);



// any over 18 (similar to some())
result = people.reduce((acc, person) => {
    // as soon as we find someone > 18, change from false to true
    if (acc) return true; // true for all if true for 1
    return person.age > 18
}, false)

console.log('any over 18:', result);



// count occurrences
// count number of times each status shows up
    // return an obj w/key = status, value = number of occurrences
const orders = [
    {id: '1', status: 'pending'},
    {id: '2', status: 'pending'},
    {id: '3', status: 'cancelled'},
    {id: '4', status: 'shipped'},
]

result = orders.reduce((acc, order) => {
    // (acc[order.status] || 0) + 1
        // this either increments the current count or initializes to 1
            // if order.status isn't currently in acc
    return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {})

console.log("count occurrences:", result);



// flatten array
// end up with an array of just file names from the folders array
console.log('\n\nFLATTEN ARRAY:\n')
const folders = [
    'index.js',
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
];

// created a named fn to enable recursive calls
function flatten (acc, item) { // item is folders[i]
    console.log('acc:', acc)
    // if item is an array, recursively call flatten so it can flatten all
    // of it's children
    if (Array.isArray(item)) {
        // return items so far and a second reduce call on item's children
        // return [...acc, ...item.reduce(flatten, [])];

        // optimized
        return item.reduce(flatten, acc)
    }

    // if item is not an array, take existing items and add in item
    return [...acc, item];
}

result = folders.reduce(flatten, []);

console.log("flatten array:", result);



// create reduce ourselves
// simplified to require an initial value
console.log('\n\nCREATE REDUCE OURSELVES:\n')

function reduce(array, callback, initial) {
    // create an accumulator variable
    let acc = initial
    // iterate over array
    for (let i = 0; i < array.length; i++) {
        // update acc to the return of the callback
        // i, array are used in Array.reduce(), they'll be unused here
        acc = callback(acc, array[i], i, array);        
        console.log('acc:', acc)
    }
    return acc; // return final value
}

result = reduce([1, 2, 3], (acc, num) => acc + num, 0);

console.log("flatten array:", result);