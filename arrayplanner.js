// v a r i a b l e s

let totalIncome = 0;
let rentExpense = 0;
let utilitiesExpense = 0;
let grocsExpense = 0;
let transExpense = 0;
let entertainmentExpense = 0;
let miscExpense = 0;
let savingsTarget = 0;
let remainingBudget = 0;
let totalExpenses = 0;
let totalHousingExpenses = 0;
let totalLivingExpenses = 0;
let totalOtherExpenses = 0;

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

// e n t e r t a i n m e n t 
function addEntertainment () {
    let input = document.getElementById('entertainmentInput');
    let amount = Number(input.value);
    console.log(amount);
    if (amount > 0) {
        entertainmentExpense = amount;
        input.value = '';
    }
}

// m i s c
function addMisc () {
    let input = document.getElementById('miscInput');
    let amount = Number(input.value);
    console.log(amount);
    if(amount > 0) {
        miscExpense = amount;
        input.value = '';
    }
    combinedOther();
}
// o t h e r 
function combinedOther() {
    totalOtherExpenses = miscExpense + entertainmentExpense;
    console.log("Other Expenses " + totalOtherExpenses);
    total();
    updateSummary();
}
// l i v i n g

function livingExpenses () {
    totalLivingExpenses = transExpense + grocsExpense;
    console.log("Living Expenses " + totalLivingExpenses);
    total();
    updateSummary();
}
// h o u s i n g
function housingExpenses () {
    totalHousingExpenses = rentExpense + utilitiesExpense;
        console.log("Housing expense " + totalHousingExpenses)
        total();
        updateSummary();
        
}

// a l l 
function total () {
    totalExpenses = totalHousingExpenses + totalLivingExpenses + totalOtherExpenses;

    remainingBudget = salaryInput - totalExpenses;
}

// s a v i n g s  g o a l

function setSavingsGoal () {
    let input = document.getElementById('savingsInput');
    let savings = Number(input.value);
    console.log(savings);
    if (savings > 0) {
        savingsTarget = savings;
    }
    updateSummary();
}

// u p d a t e

function updateSummary() {

    document.getElementById('savingsGoal').innerHTML = savingsTarget;

    document.getElementById('totalIncome').innerHTML = salaryInput;
    document.getElementById('yearlyIncome').innerHTML = salaryInput * 12;

    document.getElementById('rentExpense').innerHTML = rentExpense ;
    document.getElementById('utilitiesExpense').innerHTML = utilitiesExpense;
    document.getElementById('uInput').innerHTML = utilitiesExpense;

    document.getElementById('housingExpenses').innerHTML = totalHousingExpenses;
    document.getElementById('livingExpenses').innerHTML = totalLivingExpenses;
    document.getElementById('otherExpenses').innerHTML = totalOtherExpenses;

    document.getElementById('totalExpenses').innerHTML = totalExpenses;
    document.getElementById('yearlyExpenses').innerHTML = totalExpenses * 12;

    document.getElementById('remainingBudget').innerHTML = remainingBudget;
    document.getElementById('actualSavings').innerHTML = remainingBudget;
    document.getElementById('yearlySavings').innerHTML = remainingBudget * 12;
}