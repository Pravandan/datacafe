import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense = ({description="",note="",amount=0,createdAt=0}={}) => ({
    type : "ADD_EXPENSE",
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id=""}={}) => ({
    type : "REMOVE_EXPENSE",
    id,
})

const editExpense = (id,updates) => ({
    type : "EDIT_EXPENSE",
    id,
    updates
})

const expenseReducerDefaults = []

const expenseReducer = (state = expenseReducerDefaults, action) => {
    switch(action.type){
        case "ADD_EXPENSE" : 
        return [
            ...state,
            action.expense
        ]
        case "REMOVE_EXPENSE" : 
        return state.filter( expense => expense.id!=action.id )
        case "EDIT_EXPENSE" : 
        return state.map( (expense) => {
            if(expense.id==action.id){
                return {
                    ...expense,
                    ...action.updates
                }

            }else{
                return expense
            }
        })
        default : 
        return state
    }
}

const setTextFilter = (text="") => ({
    type : "SET_TEXT_FILTER",
    text : text
})

const sortByAmount = () => ({
    type : "CHANGE_SORT",
    sortBy : "amount"
})

const sortByDate = () => ({
    type : "CHANGE_SORT",
    sortBy : "date"
})

const setStartDate = (startDate = undefined) => ({
    type : "SET_START_DATE",
    startDate,
})

const setEndDate = (endDate = undefined) => ({
    type : "SET_END_DATE",
    endDate,
})

const filterReducerDefaults = {
    text : "",
    sortBy : "date",
    startDate : undefined,
    endDate : undefined
}

const filterReducer = (state = filterReducerDefaults, action) => {
    switch(action.type){
        case "CHANGE_SORT" : return {
            ...state,
            sortBy : action.sortBy
        }
        case "SET_TEXT_FILTER" : return {
            ...state,
            text : action.text
        }
        case "SET_START_DATE" : return {
            ...state,
            startDate : action.startDate
        }
        case "SET_END_DATE" : return {
            ...state,
            endDate : action.endDate
        }
        default:
        return state
    }
}


const store = createStore(combineReducers ({
        expenses : expenseReducer,
        filters : filterReducer
    })
)

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter( (expense) => {
        const startDateMatch = typeof startDate != "number" || expense.createdAt >= startDate
        const endDateMatch = typeof endDate != "number" || expense.createdAt <= endDate
        const textMatch = text == "" || expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy=="date"){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if(sortBy=="amount"){
            return a.amount < b.amount ? 1 : -1
        }
    })
}

const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters)
    console.log(visibleExpenses)
})


const expenseOne = store.dispatch(addExpense({description : "rent",note:"anything",amount:101,createdAt:125}))
const expenseTwo = store.dispatch(addExpense({description : "coffee",note:"black coffee",amount:301,createdAt:210}))

// store.dispatch(removeExpense({id : expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id,{amount:555}))

//store.dispatch(setTextFilter("RENT"))

// //for filter reducers
 
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())


// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(200))