import { createStore } from 'redux';

// Action generators - functions that return action objects

// Equal to: const { incrementBy = 1} = payload     -> object destructuring (payload just an object name)
// Default value {} must be set
const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        // check if incrementBy is set in the dispatch
        incrementBy: incrementBy
    }
};

const decrementCount = ({ decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    }
};

const setCount = ({ count } = {}) => {
    return {
        type: 'SET',
        count: count
    }
};

const resetCount = () => {
    return {
        type: 'RESET',
        count: 0
    }
};

const store = createStore((state = {count: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
                return {
                    count: 0
                };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
});

// Automatically executes the function whenever the store changes
// it returns a function so if we call unsubscribe() somewhere we will stop looking for changes from that point on
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions - an object that gets sent to the store
// Allows us to send of an action object then the store can do something with this information
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 15}));

store.dispatch(setCount({count: 256}));