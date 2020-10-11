// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((el, num) => {
            if (num & 1) result = result.concat(el.reverse());
            else result = result.concat(el);
        });
    }
    return result;
}