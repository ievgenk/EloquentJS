const JOURNAL = require("./journal")

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



/**
 * Finding all events present in the list
 * @param {{"events": string[], "squirrel": boolean}} journal - journal of logged events and squirell transformations 
 * @returns {string[]} - list of all unique events from the journal
*/

function journalEvents(journal) {
    let events = []
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event)
            }
        }
    }
    return events
}

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL))
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(`${event} : ${correlation}`)
    }
}

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")
    ) {
        entry.events.push("peanut teeth")
    }
}

