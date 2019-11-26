import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize' // imported to clear the error I was getting


export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        // www.regex101.com
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt}))
        }       
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    };

    onSubmit = (e) => {
        // prevent the page from going through full page refresh
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount'
            this.setState(() => ({error: 'Please provide description and amount'}));
        } else {
            // Clear the error
            this.setState(() => ({error: ''}));
            // method defined in the parrent component (AddExpensePage) and passed down to the ExpenseForm as a prop - ExpenseForm must be reusable
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,    // multiplying by 100 because the amount is currently set in cents
                createdAt: this.state.createdAt.valueOf(),          // valueOf() returns a timestamp from the moment object
                note: this.state.note
            });
        }
    };

    render() {
        return (  
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    text="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false} // makes every single day available (past, future...)
                    block
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>  
            </form>
        ) 
    }
}

