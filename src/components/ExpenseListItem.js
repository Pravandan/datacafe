import React from 'react'

const ExpenseListItem = (props) => (
    <div>
        {props.description && <p>{props.description}</p>}
        {props.amount && <p>{props.amount}</p>}
        {props.createdAt && <p>{props.createdAt}</p>}
    </div>
)

export default ExpenseListItem