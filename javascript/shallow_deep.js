// shallow vs deep

// shallow

let original1 = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

let shallowCopy = { ...original1 };

shallowCopy.name = 'Jane';
shallowCopy.address.city = 'Los Angeles';

console.log(original1.name); // 'John' (primitive value, unaffected)
console.log(original1.address.city); // 'Los Angeles' (nested object affected)
console.log(shallowCopy.address.city); // 'Los Angeles'

// deep copy 

let original = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

let deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy using JSON methods

deepCopy.name = 'Jane';
deepCopy.address.city = 'Los Angeles';

console.log(original.name); // 'John' (unaffected)
console.log(original.address.city); // 'New York' (unaffected)
console.log(deepCopy.address.city); // 'Los Angeles'
