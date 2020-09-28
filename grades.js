/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
    // return the number of grades
    return grades.length;
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
    // return the average value of all grades (sum of all grades / total number of grades)
    const sum = grades.reduce((a, b) => {
        return a + b;
    }, 0);

    const avg = (sum / grades.length);

    return Math.round(avg);
}

/** @param {number[]} grades */
export function getLowestValue(grades) {
    // return the lowest grade from the array
   return grades.sort((a, b) => a - b)[0];
}

/** @param {number[]} grades */
export function getHighestValue(grades) {
    // return the highest grade from the array
    return grades.sort((a,b) => a - b)[grades.length - 1]
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
    // return a CSV of all passing grades (10 and above)
    return grades.filter(grade => grade >= 10).join(', ');
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
    // return a CSV of all failing grades (9 and below)
    return grades.filter(grade => grade < 10).join(', ');
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
    // return a CSV of all the grades raised by 2 (grades should not exceed 20)
    return grades.map(grade => {
        if (grade + 2 > 20){
            return 20;
        }
        return grade + 2;
    }).join(", ");
}
