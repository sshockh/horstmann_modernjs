const dieTosses = { [Symbol.iterator]: function () { return { next() { return { value: 1 + Math.floor(Math.random() * 6) } } } } }

let i = 0;
for (let el of dieTosses) {
    console.log(el);
    if (i++ > 100) return;
}