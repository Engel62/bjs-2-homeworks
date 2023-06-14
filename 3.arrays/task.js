function compareArrays(arr1, arr2) {
    let result = arr1.length===arr2.length && arr1.every((element, n) => element===arr2[n]);
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    let result1 = users.filter(el => el.gender === gender).reduce((accum, averageAge, index, arrayLength) => accum + averageAge.age / arrayLength.length, 0);
    return result1
}