
function replaceIllegalChars(path) {
    //   < (less than)
    //   > (greater than)
    //   : (colon - sometimes works, but is actually NTFS Alternate Data Streams)
    //   " (double quote)
    //   / (forward slash)
    //   \ (backslash)
    //   | (vertical bar or pipe)
    //   ? (question mark)
    //   * (asterisk)
    return path.replace(/[<>:"'\/\\|?*]/g, '-');
}

function removeSpace(s) {
    if (s == null) return s;
    return s.replace(/\s|\u3000/g, '');
}

exports.replaceIllegalChars = replaceIllegalChars;
exports.removeSpace = removeSpace;
