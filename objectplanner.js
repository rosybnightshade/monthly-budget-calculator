 let budget = {
    salary: 0,
    rent: 0,
    utilities: 0,
    groceries: 0,
    transport: 0,
    entertainment: 0,
    miscellaneous: 0,
    savingGoal: 0,

    getTotalIncome() {
        return this.salary;
    },

    getHousingExpenses() {
        return this.rent + this.utilities;
    },

    getLivingExpenses() {
        return this.groceries + this.transport
    },
 }

