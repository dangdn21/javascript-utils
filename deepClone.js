// https://freedium.cfd/https://medium.com/stackademic/14-javascript-interview-difficult-questions-and-code-implementation-3a72fdc54ecf

function deepClone(source, clonedMap) {
  clonedMap = clonedMap || new Map();

  if (source === null || typeof source !== 'object') {
    return source;
  }
  if (clonedMap.has(source)) {
    return clonedMap.get(source);
  }
  var result;
  var type = getType(source);
  if (type === 'object' || type === 'array') {
    result = type === 'array' ? [] : {};
    clonedMap.set(source, result);
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = deepClone(source[key], clonedMap);
      }
    }
  } else {
    result = source;
  }
  return result;
}
function getType(source) {
  return Object.prototype.toString
    .call(source)
    .replace(/^\[object (.+)\]$/, '$1')
    .toLowerCase();
}
const obj = {
  a: 1,
  b: {
    c: 2
  }
}
const clone = deepClone(obj)
