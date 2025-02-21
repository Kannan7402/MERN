
onmessage = function(event) {
    if (event.data === 'start') {
        let sum = 0;

        // Perform a heavy computation (sum of numbers 1 to 1000000)
        for (let i = 1; i <= 1000000; i++) {
            sum += i;
        }

        // Send the result back to the main thread
        postMessage(sum);
    }
};
