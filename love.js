/**
 * @author Shady Khalifa
 * @version 1.0.0
 */


const grid = document.getElementsByClassName('day')
const counter = document.getElementsByClassName('f4 text-normal mb-2')[1]
/**
 * Drow in Github Contribution activity Board
 * 
 * 000, 007, 014, 021, 028, 035, 042, 049, 056, 063, 070, 077, 084, 091, 098, 105, 112, 119, 126, 133, 140, 147, 154, 161, 168, 175, 182, 189, 196, 203, 210, 217, 224, 231, 238, 245, 252, 259, 266, 273, 280, 287, 294, 301, 308, 315, 322, 329, 336, 343, 350, 357, 364
 * 001, 008, 015, 022, 029, 036, 043, 050, 057, 064, 071, 078, 085, 092, 099, 106, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176, 183, 190, 197, 204, 211, 218, 225, 232, 239, 246, 253, 260, 267, 274, 281, 288, 295, 302, 309, 316, 323, 330, 337, 344, 351, 358, 365
 * 002, 009, 016, 023, 030, 037, 044, 051, 058, 065, 072, 079, 086, 093, 100, 107, 114, 121, 128, 135, 142, 149, 156, 163, 170, 177, 184, 191, 198, 205, 212, 219, 226, 233, 240, 247, 254, 261, 268, 275, 282, 289, 296, 303, 310, 317, 324, 331, 338, 345, 352, 359, 366
 * 003, 010, 017, 024, 031, 038, 045, 052, 059, 066, 073, 080, 087, 094, 101, 108, 115, 122, 129, 136, 143, 150, 157, 164, 171, 178, 185, 192, 199, 206, 213, 220, 227, 234, 241, 248, 255, 262, 269, 276, 283, 290, 297, 304, 311, 318, 325, 332, 339, 346, 353, 360
 * 004, 011, 018, 025, 032, 039, 046, 053, 060, 067, 074, 081, 088, 095, 102, 109, 116, 123, 130, 137, 144, 151, 158, 165, 172, 179, 186, 193, 200, 207, 214, 221, 228, 235, 242, 249, 256, 263, 270, 277, 284, 291, 298, 305, 312, 319, 326, 333, 340, 347, 354, 361
 * 005, 012, 019, 026, 033, 040, 047, 054, 061, 068, 075, 082, 089, 096, 103, 110, 117, 124, 131, 138, 145, 152, 159, 166, 173, 180, 187, 194, 201, 208, 215, 222, 229, 236, 243, 250, 257, 264, 271, 278, 285, 292, 299, 306, 313, 320, 327, 334, 341, 348, 355, 362
 * 006, 013, 020, 027, 034, 041, 048, 055, 062, 069, 076, 083, 090, 097, 104, 111, 118, 125, 132, 139, 146, 153, 160, 167, 174, 181, 188, 195, 202, 209, 216, 223, 230, 237, 244, 251, 258, 265, 272, 279, 286, 293, 300, 307, 314, 321, 328, 335, 342, 349, 356, 363
 * 
 *
 * Auto Genrated by this loop
 * ```
 * const g = []
 * let d = []
 * let x = 0
 * for(i = 5; i < 12; i++) {
 *   d = []
 *   for(j = 0; j < 365; j += 7) {
 *    d.push(x + j)
 *   }
 *   g.push(d);
 *   x += 1;
 * }
 * ```
 */
let hits = 0
const drow = (cell, color = 'green', after = 1000) => {
    setTimeout(() => {
        grid[cell].style.fill = color
        hits += 2
        counter.innerHTML = `${hits} contributions in the last year`
        if (hits > 1000) {
            counter.innerHTML = `&#8734; contributions in the last year`
        }
    }, after);
}

/**
 * Clear The cell
 */
const clearCell = cell => {
    setTimeout(() => {
        grid[cell].style.fill = '#eee'
    }, 800);
}

/**
 * Sketchs a vertical Line
 * @param {number} from the start cell
 * @param {number} to the end cell
 * @param {hexColor} color the color of the cell
 */
const sketchVLine = (from = 0, to = 0, color = 'green') => {
    for (let i = from; i < to + 1; i++) {
        drow(i, color)
    }
}

/**
 * Sketchs a horizontal Line
 * @param {number} from the start cell
 * @param {number} to the end cell
 * @param {hexColor} color the color of the cell
 */
const sketchHLine = (from = 0, to = 0, color = 'green') => {
    for (let i = from; i < to + 7; i += 7) {
        drow(i, color)
    }
}

/**
 * Sketchs a Slopy Line
 * @param {number} from the start cell
 * @param {number} to the end cell
 * @param {hexColor} color the color of the cell
 */
const sketchSlope = (from = 0, to = 0, color = 'green') => {
    if (from < to) {
        for (let i = from; i < to + 8; i += 8) {
            drow(i, color)
        }
    } else {
        for (let i = from; i > to - 8; i -= 8) {
            drow(i, color)
        }
    }
}

/**
 * Clear The Board
 */
const clearBoard = () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].style.fill = 'gray'
        clearCell(i)
    }
}

/**
 * Moves horizontaly
 */
const moveH = (from, steps = 1) => {
    return from + 7 * steps
}

/**
 * Moves Slopy like this slash \ or like this slash /
 */
const moveS = (from, steps = 1, direction = "//") => {
    return direction === '//' ? 8 * steps - from : from + 8 * steps
}
/**
 * Sketchs a letter from the start cell
 * every letter sketched in 4x6 grid
 * all the content will be cleard from the started point
 * @param {number} from the start cell
 * @param {hexColor} color the color of the cell
 */
const sketchLetter = (letter, from, color = 'green') => {
    // clear the area
    for (let i = 0; i < 7; i++) {
        sketchHLine(from, moveH(from, 4), '#eee')
    }
    switch (letter) {
        case "n":
            sketchVLine(from, from + 5, color)
            sketchSlope(from, moveH(from + 5, 3), color)
            sketchVLine(moveH(from, 4), moveH(from + 5, 4), color)
            break;

        case "o":
            sketchHLine(moveH(from), moveH(from, 2), color)
            for (let i = 1; i < 5; i++) {
                sketchHLine(from + i, moveH(from + i, 3), color)
                sketchHLine(moveH(from + i), moveH(from + i, 2), '#eee')
            }
            sketchHLine(moveH(from + 5), moveH(from + 5, 2), color)
            break;

        case "d":
            sketchVLine(from, from + 5, color)
            sketchSlope(moveH(from), moveH(from + 5, 2), color)
            sketchVLine(moveH(from + 3, 3), moveH(from + 3, 3), color)
            sketchHLine(from + 4, moveH(from + 4, 2), color)
            sketchHLine(moveH(from + 4), moveH(from + 4), '#eee')
            sketchHLine(from + 5, moveH(from + 5), color)
            break;

        case "e":
            sketchVLine(from, from + 5, color)
            sketchHLine(from, moveH(from, 3), color)
            sketchHLine(from + 3, moveH(from + 3, 3), color)
            sketchHLine(from + 5, moveH(from + 5, 3), color)
            break;

        case "j":
            sketchHLine(moveH(from, 2), moveH(from, 3), color)
            for (let i = 1; i < 5; i++) {
                sketchVLine(moveH(from, 3), moveH(from + i, 3), color)
            }
            sketchHLine(moveH(from + 5), moveH(from + 5, 3), color)
            break;

        case "s":
            sketchHLine(moveH(from), moveH(from, 3), color)
            sketchVLine(from + 1, from + 1, color)
            sketchSlope(from + 1, moveS(from, 3, '\\'), color)
            sketchHLine(moveH(from + 5), moveH(from + 5, 3), color)
            break;

        case "i":
            sketchHLine(from, moveH(from, 4), color)
            sketchVLine(moveH(from + 1, 2), moveH(from + 4, 2), color)
            sketchHLine(from + 5, moveH(from + 5, 4), color)
            break;
        /**
         * 
         * 
         *        007 014 021     035 042 049
         *    001 008 015 022 029 036 043 050 057
         *    002 009 016 023 030 037 044 051 058
         *        010 017 024 031 038 045 052
         *            018 025 032 039 046
         *                026 033 040
         *                    034
         * 
         */
        case ":heart:":
            sketchHLine(moveH(from), moveH(from, 3), color)
            sketchHLine(moveH(from, 3), moveH(from, 7), color)
            sketchHLine(moveH(from, 4), moveH(from, 4), '#eee')
            sketchHLine(from + 1, moveH(from + 1, 8), color)
            sketchHLine(from + 2, moveH(from + 2, 8), color)
            sketchHLine(moveH(from + 3), moveH(from + 3, 7), color)
            sketchHLine(moveH(from + 4, 2), moveH(from + 4, 6), color)
            sketchHLine(moveH(from + 5, 3), moveH(from + 5, 5), color)
            sketchHLine(moveH(from + 6, 4), moveH(from + 6, 4), color)
            break;
        default:
            console.log('missed letter !', letter)
            break;
    }
}

const githubWrite = (text, from = 0, color = 'green') => {
    let pos = from
    text.split('').forEach(letter => {
        sketchLetter(letter, pos, color)
        pos += 6 * 7
    });
}
const iLoveJS = () => {
    clearBoard()
    let hits = 0
    sketchLetter('i', 0, 'black')
    sketchLetter(':heart:', 6 * 7, 'red')
    sketchLetter('j', 15 * 7, 'yellow')
    sketchLetter('s', 21 * 7, 'yellow')
    setTimeout(() => {
        clearBoard()
        sketchLetter('i', 0, 'black')
        sketchLetter(':heart:', 6 * 7, 'red')
        githubWrite('nodejs', 16 * 7)
    }, 3000);
}
