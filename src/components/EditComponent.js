import React from 'react'

const EditComponent = (props) => (
    <div>
        <p>Edit Page component with id {props.match.params.id}</p>
    </div>
)

export default EditComponent