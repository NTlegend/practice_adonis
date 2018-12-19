function ucFirst(str) {
  return `${str[0].toUpperCase()}${str.substring(1)}`;
}

/**
 *
 * Returns a substring from the starting position to the final position
 *
 * @param str
 * @param start
 * @param end
 * @returns {*}
 */
function getSubstring(str, start, end) {
  let substring = str;
  const arrayOfSubstrings = str.split(start || end);
  if (arrayOfSubstrings.length > 1) {
    if (start) {
      const afterStartSegments = arrayOfSubstrings[1].split(end);
      [substring] = afterStartSegments;
    } else {
      [substring] = arrayOfSubstrings;
    }
  }

  return substring;
}

module.exports = { ucFirst, getSubstring };
