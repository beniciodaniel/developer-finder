module.exports = function parseStringAsArray(stringToArray) {
    return stringToArray.split(',').map(tech => tech.trim());
}