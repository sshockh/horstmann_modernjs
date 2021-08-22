class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        return {
            next() {
                current++;
                return current <= end
                    ? { value: current - 1 }
                    : { done: true }
            }
        }
    }
}

const iterable = new Range(1, 6);
for (let el of iterable)
    console.log(el);