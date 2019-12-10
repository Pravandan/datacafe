import React from 'react'
import {connect} from 'react-redux'

import getExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
    <div>
        <p> ExpenseList </p>
        {props.expenses.map( (expense) => (<ExpenseListItem description={expense.description} amount={expense.amount} createdAt={expense.createdAt} key={expense.id}/>))}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses : getExpenses(state.expenses,state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)