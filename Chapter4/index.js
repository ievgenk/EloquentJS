require("./journal")

/**
 * Function that calculates coefficient between two occurances
 * @param {number[]} table - two by two table of occurances
 */

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) / (Math.sqrt(
        (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])))
}

/**
 * Extracting a two by two table for a given event
 * @param {string} event - event we are searching for
 * @param {{"events": string[], "squirrel": boolean}} journal - journal of logged events and squirell transformations 
 * @returns {number[]} - two by two table of occurances
 */

function tableFor(event, journal) {
    let table = [0, 0, 0, 0]
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i]
        let index = 0
        if (entry.events.includes(event)) index += 1
        if (entry.squirrel) index += 2
        table[index] += 1
    }
    return table
}

console.log(tableFor("carrot", JOURNAL))