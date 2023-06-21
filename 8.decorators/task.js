
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = args.join(',');
        let objectInCache = cache.find((item) => hash in item);
        if (objectInCache ) {
            console.log("Из кэша: " + objectInCache[hash]);
            return "Из кэша: " + objectInCache[hash];
        }
        let result = func(...args);
        cache.push({[hash]:result});
        console.log(cache);
        if (cache.length > 5) {
            cache.shift(); //
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    console.log(cache);
    return wrapper;
}


function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            timeoutId = true;
            func(...args);
            wrapper.count++;
        }, delay);
        wrapper.allCount++;
    }

    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}