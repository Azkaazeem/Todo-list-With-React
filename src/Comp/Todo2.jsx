import React from 'react'

const Todo2 = () => {
    return (
        <div className="row todo-item g-3">
            <div className="col-12 col-md-6 fw-bold">
                Go to School
            </div>
            <div className="col-12 col-md-4 text-muted">
                19/02/2026
            </div>
            <div className="col-12 col-md-2">
                <button className='btn btn-danger action-btn'>Delete</button>
            </div>
        </div>
    )
}

export default Todo2