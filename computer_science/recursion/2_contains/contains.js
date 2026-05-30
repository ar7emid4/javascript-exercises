const contains = function(object, value) {
    if (!isObject(object)) {
        if (Object.is(object, value)) return true;
        if (object != value) return false;
    }

    let result = false;
    for (const element of Object.values(object)) {
        result = contains(element, value);
        if (result == true) break;
    }
    return result;
};

function isObject(val) {
  return val !== null && typeof val === 'object' && !Array.isArray(val);
}
  
// Do not edit below this line
module.exports = contains;
