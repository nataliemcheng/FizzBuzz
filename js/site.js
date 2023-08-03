// get values
// controller function
function getVals() {

    // get values
    let fizzNum = document.getElementById("fizzNum").value;
    let buzzNum = document.getElementById("buzzNum").value;

    // check for numbers
    fizzNum = parseInt(fizzNum);
    buzzNum = parseInt(buzzNum);

    // check that the values are actually integers
    if (Number.isInteger(fizzNum) && Number.isInteger(buzzNum)) {
        let data = fizzBuzz(fizzNum, buzzNum);
        display(data);
    } else {
        alert("Integers Only");
    }
}

// logic function
function fizzBuzz(fizzNum, buzzNum) {
    let result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % fizzNum == 0 && i % buzzNum == 0){
            result.push('FizzBuzz');
        } else if (i % fizzNum == 0) {
            result.push('Fizz');
        } else if (i % buzzNum == 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

// displays the results to the user
// display/view function
function display(data) {
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("template");

    // clear the table first
    tableBody.innerHTML = "";

    for (let i = 0; i < data.length; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        // grab the tds to put into an array
        let rowCols = tableRow.querySelectorAll("td");

        // adds the appropriate colors
        rowCols[0].classList.add(data[i]); 
        // adds the data to the table
        rowCols[0].textContent = data[i];

        rowCols[1].classList.add(data[i + 1]);
        rowCols[1].textContent = data[i + 1];

        rowCols[2].classList.add(data[i + 2]);
        rowCols[2].textContent = data[i + 2];

        rowCols[3].classList.add(data[i + 3]);
        rowCols[3].textContent = data[i + 3];

        rowCols[4].classList.add(data[i + 4]);
        rowCols[4].textContent = data[i + 4];

        tableBody.appendChild(tableRow);
    }
}