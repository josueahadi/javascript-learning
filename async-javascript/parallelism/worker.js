// worker.js
self.onmessage = function(e) {
    if (e.data === 'start work') {
        let result = 0;
        for (let i = 0; i < 1e9; i++) {
            result += i;
        }
        self.postMessage(result);
    }
};
