function second(iterable) {

    const iterator = iterable[Symbol.iterator];

    if (!iterator) {
        throw new Exception('Значение не является итерируемым объектом')
    }

    let printed = false;

    for (const el of iterable) {
        if (printed) console.log(el);
        printed = !printed;
    }

}

second([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);