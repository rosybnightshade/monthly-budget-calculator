// global variables
let totalIncome = 0;
let yearlyIncome = 0;

function addSalary() {
    let totalIncome = document.getElementById('salaryInput');
    let salary = Number(totalIncome.value);
    console.log(salary);
    if(salary > 0) {
        salaryInput = salary;
        updateSummary();
        salaryInput.value = '';
    }

}

function addRent() {
    let input = document.getElementById('rentInput');
    let amount = Number(input.value);

    if (amount > 0) {
        rentInput = amount;
        updateSummary();
        rentInput.value = '';
    }
}

// u t i l i t i e s

function addUtilities() {
    let input = document.getElementById('uInput');
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0) {
        uInput = amount;
        updateSummary();
        uInput.value = '';
    }
}

function housingExpenses () {
    totalHousingExpense = rentInput + uInput;
}
function updateSummary() {
    document.getElementById('totalIncome').innerHTML = salaryInput;
    document.getElementById('yearlyIncome').innerHTML = salaryInput * 12;

    document.getElementById('rentExpense').innerHTML = rentInput ;
    document.getElementById('rentExpense').innerHTML = uInput;

    document.getElementById('totalHousingExpense').innerHTML = rentInput + uInput;

}
