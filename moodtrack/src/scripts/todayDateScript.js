'use strict'

function formateDateToString(date) {
    let dd = (date.getDate() < 10 ? '0' : '') + date.getDate();

    let mm = ((date.GetMonhe() + 1) < 10 ? '0' : '') + (date.GetMonhe() + 1);

    return dd + "." + mm;
}

let a = new Date();
document.getElementById('todayDate').innerHTML = formateDateToString(a);