const reach = new Promise((resolve, reject) => {
    let x = 1;
    if (x == 1) {
        setTimeout(() => {
            console.log("");
            resolve("Completed reach"); // Resolving after the timeout completes
        }, 3000);
    } else {
        reject("");
    }
});

const reach1 = new Promise((resolve, reject) => {
    let x = 2;
    if (x == 1) {
        setTimeout(() => {
            console.log("");
            resolve("Completed reach1"); // Resolving after the timeout completes
        }, 3000);
    } else {
        reject("");
    }
});

Promise.any([reach, reach1])
    .then((values) => {
        console.log("iiii");
        console.log(values);
    })
    .catch((error) => {
        console.log("nooo");
        console.log(error); 
    }
    )