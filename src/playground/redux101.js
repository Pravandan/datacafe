import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1}) => ({
    type : "INCREMENT",
    incrementBy : incrementBy
})

const decrementBy = ({decrementBy = 1}) => ({
    type : "DECREMENT",
    decrementBy : decrementBy
})

const resetCounter = () => ({
    type : "RESET"
})

const setCounter = ({setValue = 1999}) => ({
    type : "SET",
    setValue : setValue
})

const countReducer = (state = {count:0},action) => {
    switch(action.type){
        case "INCREMENT" : 
        return {
            count : state.count + action.incrementBy
        }

        case "DECREMENT" : 
        return {
            count : state.count-action.decrementBy,
        }

        case "RESET" : return {
            count : 0
        }

        case "SET" : return {
            count : action.setValue
        }

        default : return state
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe( () => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy : 5 }))

store.dispatch(resetCounter())

store.dispatch(setCounter({setValue : 999}))

store.dispatch(decrementBy({decrementBy : 101}))
