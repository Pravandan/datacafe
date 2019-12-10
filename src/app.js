import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

import configureStore from './store/configureStore'
import AppRouter from './router/AppRouter'

import {addExpense,editExpense,removeExpense} from './actions/expenses'
import {setTextFilter,sortByAmount} from './actions/filters'
import getExpenses from './selectors/expenses'

const store = configureStore()


store.dispatch(addExpense({description:"water bill",amount:1555,createdAt:115062018}))
store.dispatch(addExpense({description:"electricity bill",amount:777,createdAt:115062018}))

store.dispatch(setTextFilter("water"))

const state = store.getState()

console.log(getExpenses(state.expenses,state.filters))

// setTimeout(() => {
//     store.dispatch(setTextFilter("elec"))
// },3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))