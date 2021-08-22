function secondIterable(iterable) {

    const oldIterator = iterable[Symbol.iterator]();
    if (!oldIterator) throw new Error('Значение не является итерируемым объектом');

    iterable[Symbol.iterator] = function () {
        return {
            next() {
                oldIterator.next();
                return oldIterator.next();
            }
        }
    }

    return iterable;
}

const iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const el of iterable) {
    console.log(el);
}

for (const el of secondIterable(iterable)) {
    console.log(el);
}