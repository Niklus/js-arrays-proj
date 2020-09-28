// Import stylesheets
import './style.css';

import {getPassingGrades, getFailingGrades, getNumberOfGrades, getAverageValue, getLowestValue,  getHighestValue, getRaisedGrades} from "./grades.js";

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [12, 19, 10, 4, 15, 9];

const renderSecondTable = grades => {
    document.querySelector("#passing-grades").innerHTML = getPassingGrades(grades);
    document.querySelector("#failing-grades").innerHTML = getFailingGrades(grades);
    document.querySelector("#raised-grades").innerHTML = getRaisedGrades(grades);
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getLowestValue(grades)}</td>
        <td>${getAverageValue(grades)}</td>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getHighestValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderSecondTable(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

render(grades);