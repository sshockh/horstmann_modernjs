function dieTosses(n) {
    const obj = {}
    Object.defineProperty(
        obj, Symbol.iterator,
        {
            enumerable: false,
            writable: false,
            configurable: true,
            value() {
                let counter = 0;
                return {
                    next() {
                        return counter++ < n
                            ? { value: 1 + Math.floor(Math.random() * 6) }
                            : { done: true }
                    }
                }
            }
        }
    )
    return obj;
}

for (const el of dieTosses(7)) console.log(el);