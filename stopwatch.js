function stopwatch() {
    let startTime, endTime, running, duration = 0;

    // starts the watch
    this.startTime = function () {
        if (running) {
            throw new Error('Stopwatch is current running.')
        }
        running = true;
        startTime = new Date();

    };

    // stops the watch
    this.stopTime = function () {
        if (!running) {
            throw new Error('Stopwatch is currently stopped.')
        }
        running = false;
        endTime = new Date();

        // calculate seconds
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    // resets the watch
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
    }
// exposes the duration
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    })
}

let sw = new stopwatch();