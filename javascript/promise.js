// promise
const promise = new Promise((resolve,reject) => {
    let x=1;
    if(x==1)
    {
        resolve(x);
    }
    else{
        reject(error);
    }
});
promise 
    .then(x=> {
        console.log(x);
    })
    .catch(error=> {
        console.log("error");
});
// timeout and interval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 executions
    }
}, 1000);

setTimeout(() => {
    console.log("This message appears after 3 seconds.");
}, 3000);

// shallow vs deep

//shallow

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

console.log(original.name); // 'John' (primitive value, unaffected)
console.log(original.address.city); // 'Los Angeles' (nested object affected)
console.log(shallowCopy.address.city); // 'Los Angeles'

//deep copy 

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
