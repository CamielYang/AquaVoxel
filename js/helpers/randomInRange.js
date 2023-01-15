function randomInRange(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeEnd - rangeStart + 1) + rangeStart);
}

export default randomInRange;
