export default (expenses) => {
    return expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);  // 0 is default value for 'sum'
};