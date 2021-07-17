const promisify = (item, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(item)
        }, delay);
    })
}

const a = () => promisify("A", 5000);
const b = () => promisify("B", 3000);
const c = () => promisify("C", 1000);

const parallel = (...promises) => {
    return Promise.all(promises)
        .then(res => {
            console.log("Promise " + res + " has been resolved! (parallel)");
        })
};

const race = (...promises) => {
    return Promise.race(promises)
        .then(res => {
            console.log("Promise " + res + " has been resolved! (race)");
        })
}
const sequence = async(...promises) => {
    let i = 0;
    while (i < promises.length) {
        await promises[i]().then(res => console.log("Promise " + res + " has been resolved! (sequence)"));
        i++;
    }
}

parallel(a(), b(), c());
race(a(), b(), c());
sequence(a, b, c);

// parallel(a(), b(), c());

// 1. PARALLEL PROMISES

// 2. SEQUENTIAL PROMISES

// 3. RACING PROMISES