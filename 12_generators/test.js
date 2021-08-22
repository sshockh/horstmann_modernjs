class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    [Symbol.iterator]() {
        let current = this.start;
        const last = this.end;
        return {
            next() {
                return current < last
                    ? { value: current++ }
                    : { done: true }
            },
            return() {
                console.log('return');
                return { done: true }
            }
        }
    }
}

for (let el of new Range(1, 11)) {
    if (el > 5) throw new Error;
    console.log(el);
}