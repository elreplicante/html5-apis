var worker = new Worker('task.js');
debugger
worker.postMessage(['model', 'movies']);

worker.addEventListener("message", function(event) {
    console.log(event);
});