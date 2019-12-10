export const setTextFilter = (text="") => ({
    type : "SET_TEXT_FILTER",
    text : text
})

export const sortByAmount = () => ({
    type : "CHANGE_SORT",
    sortBy : "amount"
})

export const sortByDate = () => ({
    type : "CHANGE_SORT",
    sortBy : "date"
})

export const setStartDate = (startDate = undefined) => ({
    type : "SET_START_DATE",
    startDate,
})

export const setEndDate = (endDate = undefined) => ({
    type : "SET_END_DATE",
    endDate,
})
