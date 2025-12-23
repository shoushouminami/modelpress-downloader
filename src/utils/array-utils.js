
function insertSorted(arr, value) {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = (left + right) >> 1;
        if (arr[mid] < value) left = mid + 1;
        else right = mid;
    }

    arr.splice(left, 0, value);
    return arr;
}

function insertSortedImmutable(arr, value) {
    const i = arr.findIndex(x => x > value);
    if (i === -1) return [...arr, value];
    return [...arr.slice(0, i), value, ...arr.slice(i)];
}

function range(n) {
    return Array.from({ length: n }, (_, i) => i);
}

module.exports = {
    insertSortedImmutable,
    range
}
