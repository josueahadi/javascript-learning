document.getElementById('startWorker').addEventListener('click', () => {
    const worker = new Worker('worker.js');
    worker.onmessage = function(e) {
        document.getElementById('result').textContent = 'Results from worker: ' + e.data;
    };

    worker.postMessage('start work')
});