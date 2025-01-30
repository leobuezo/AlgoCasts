function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    }
}

function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

fib = memoize(fib);
module.exports = fib;
