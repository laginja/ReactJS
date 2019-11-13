import uuid from 'uuid';

// Action generators

// ADD_EXPENSE
export const addExpense =  ({description = '', notes = '', amount = 0, createdAt = 0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: notes,
            amount: amount,
            createdAt: createdAt
        }   
    }
};

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
};