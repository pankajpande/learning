import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"
import './Expenses.css'

const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState();
    const onYearSelect = (year) => {
        setFilterYear(year);
    }

    let expenseList = [...expenses];
    if (filterYear) {
        expenseList = expenseList.filter(item => item.date.getUTCFullYear() == filterYear)
    }

    return (

        <div className="expenses">
            <ExpensesFilter onYearSelect={onYearSelect}></ExpensesFilter>
            {expenseList.map((item) => <ExpenseItem
                title={item.title}
                amount={item.amount}
                date={item.date}
            />)}
        </div>

    );
}

export default Expenses;