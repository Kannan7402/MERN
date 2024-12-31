onmessage = function(e) {
    postMessage('Received: ' + e.data); // Send response back to main thread
};