// v a r i a b l e s

let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let grocsExpense = 0;
let transExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;
let savingsTarget = 0;
let totalHousingExpense=0;
let totalLivingExpenses = 0;

// s a l a r y

function addSalary() {
    let totalIncome = document.getElementById('salaryInput');
    let salary = Number(totalIncome.value);
    console.log(salary);
    if(salary > 0) {
        salaryInput = salary;
        updateSummary();
        totalIncome.value ='';
    }
}

// r e n t

function addRent() {
    let input = document.getElementById('rentInput');
    let amount = Number(input.value);

    if (amount > 0) {
        rentExpense = amount;
        updateSummary();
        input.value = '';
    }
}

// u t i l i t i e s

function addUtilities() {
    let input = document.getElementById('uInput');
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0) {
        utilitiesExpense = amount;
        updateSummary();
        input.value = '';
    }
    housingExpenses();
}

// h o u s i n g

function housingExpenses () {
    totalHousingExpense = rentExpense + utilitiesExpense;
        console.log("Housing expense" + totalHousingExpense)

        updateSummary();
}

// g r o c e r i e s

function addGroceries () {
    let input = document.getElementById('groceriesInput');
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0) {
        grocsExpense = amount;
        input.value = '';
    }
    livingExpenses();
}

// t r a n s p o r t a t i o n

function addTransport () {
    let input = document.getElementById('transportInput');
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0 ) {
        transExpense = amount;
        input.value = '';
    }
    livingExpenses();
}

// l i v i n g

function livingExpenses () {
    totalLivingExpenses = transExpense + grocsExpense;
    console.log("Living Expenses " + totalLivingExpenses);
    updateSummary();

}

// u p d a t e

function updateSummary() {
    document.getElementById('totalIncome').innerHTML = salaryInput;
    document.getElementById('yearlyIncome').innerHTML = salaryInput * 12;

    document.getElementById('rentExpense').innerHTML = rentExpense ;
    document.getElementById('utilitiesExpense').innerHTML = utilitiesExpense;
    document.getElementById('uInput').innerHTML = utilitiesExpense;

    document.getElementById('housingExpenses').innerHTML = totalHousingExpense;
    document.getElementById('livingExpenses').innerHTML = totalLivingExpenses;
}


function setSavingsGoal(){

}