function createDebounceFunction(cb, delay) {
    let timerId;
    return function() {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            cb();
            clearTimeout(timerId);
            timerId = false;
        }, delay);
        return timerId;
    }
}

function cb5000() {
    console.log('hello 1500');
}

function cb4000() {
    console.log('hello 1200');
}

const delayFunc1500 = createDebounceFunction(cb5000, 1500);
const delayFunc1200 = createDebounceFunction(cb4000, 1200);
delayFunc1200();
delayFunc1500();
setTimeout(() => delayFunc1500(), 100);
delayFunc1200();