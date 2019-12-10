const filterReducerDefaults = {
    text : "",
    sortBy : "date",
    startDate : undefined,
    endDate : undefined
}

export default (state = filterReducerDefaults, action) => {
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