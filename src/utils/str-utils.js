
function replaceIllegalChars(path, replacement = '-') {
    //   < (less than)
    //   > (greater than)
    //   : (colon - sometimes works, but is actually NTFS Alternate Data Streams)
    //   " (double quote)
    //   / (forward slash)
    //   \ (backslash)
    //   | (vertical bar or pipe)
    //   ? (question mark)
    //   * (asterisk)
    return path.replace(/[<>:"'\/\\|?*]/g, replacement);
}

function removeSpace(s, replacement = '') {
    if (s == null) return s;
    return s.replace(/\s|\u3000/g, replacement);
}

function padSurround(str, width, pad = " ") {
    str = String(str);
    if (str.length >= width) return str;

    const total = width - str.length;
    const right = Math.floor(total / 2);
    const left = total - right;

    return pad.repeat(left) + str + pad.repeat(right);
}

module.exports = {
    replaceIllegalChars,
    removeSpace,
    padSurround
}
