let arr = [1, 5, 77, 45, 16, 3, 8, 99, 10, 89];
console.log(arr)

//1
function searchArray(item, array) {
    if (array.indexOf(item) === -1) {
        console.log(1)
    } else {
        console.log(array.indexOf(item))
    }

}

searchArray(16, arr);
searchArray(22, arr);

//2

function doubleArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = 2 * array[i];
    }
    return array;

