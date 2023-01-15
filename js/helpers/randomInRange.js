function randomInRange(rangeStart, rangeEnd) {
    return Math.floor(Math.random() * (rangeStart - rangeEnd + 1) + rangeEnd);
}

export default randomInRange;
