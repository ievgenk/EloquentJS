/**
 * Generates an array with all of the numbers within the provided range
 * @param {int} start start number for the range 
 * @param {int} end inclusive end number for the range
 * @param {int} step step increment or decrement
 * @returns {int[]} an array of all numbers within the range
 */

function range(start, end, step = 1) {
    let numRange = []
    let index = start
    while (step > 0 ? index <= end : index >= end) {
        numRange.push(index)
        index += step
    }
    return numRange
}

/**
 * Sums all numbers in the provided array and returns the result
 * @param {int[]} nums array of numbers 
 * @returns {int} sum of all numbers
 */

function sum(nums) {
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    return sum
}

/**
 * Reverses an array by creating a new one
 * @param {any[]} array An array
 * @returns {any[]} Reversed array
 */

function reverseArray(array) {
    let reversedArray = []
    for (let item of array) {
        reversedArray.unshift(item)
    }
    return reversedArray
}

/**
 * Reverses given array
 * @param {any[]} array
 * @returns {any[]} reversed array
 */

function reverseArrayInPlace(array) {
    let halfOfArray = array.slice(0, Math.floor(array.length / 2))
    for (let item of halfOfArray) {
        let indexOfReplacee = array.indexOf(item)
        let tempMemory = array[array.length - (indexOfReplacee + 1)]
        array[array.length - (indexOfReplacee + 1)] = item
        array[indexOfReplacee] = tempMemory
    }
    return array
}

function arrayToList(arr) {
    let list = {}
    if (arr.length) {
        list.value = arr[0]
    }
    arr.shift()
    if (arr.length) {
        list.rest = arrayToList(arr)
    }
    else {
        list.rest = null
    }
    return list
}

function listToArray(list) {
    let arr = []
    for (let node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

function prepend(element, list) {
    return { value: element, rest: list }
}

function nth(list, index) {
    if (index === 0) {
        return list.value
    }
    else if (!list) {
        return null
    }
    return nth(list.rest, index - 1)
}

function isObjectAndNotNull(obj) {
    return typeof (obj) === 'object' && obj !== null
}

function deepEqual(a, b) {
    if (a === b) return true
    else if (!isObjectAndNotNull(a) || !isObjectAndNotNull(b)) return false

    let aKeys = Object.keys(a), bKeys = Object.keys(b)
    if (aKeys.length !== bKeys.length) return false

    for (let key of aKeys) {
        if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false
    }
    return true
}
