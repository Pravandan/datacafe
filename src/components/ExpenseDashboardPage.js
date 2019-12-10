import React from 'react'
import {connect} from 'react-redux'

import ConnectedExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

import {setTextFilter} from '../actions/filters'


const ExpensifyDashboardComponent = (props) => (
    <div>
        <ExpenseListFilters />
        <ConnectedExpenseList />
        <button onClick={() => {props.dispatch(setTextFilter())}}>CLick here to reset the text filter</button>
    </div>
)

const mapStateToProps = (props) => ({

})


export default connect(mapStateToProps)(ExpensifyDashboardComponent)