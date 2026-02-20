import React from 'react'

const AddTodo = () => {
    return (
        <div className="row add-todo-row g-3 align-items-center">
            <div className="col-12 col-md-6">
                <input type="text" className="form-control" placeholder='Enter Todo Here...' />
            </div>
            <div className="col-12 col-md-4">
                <input type="date" className="form-control" />
            </div>
            <div className="col-12 col-md-2">
                <button className='btn btn-success action-btn'>Add</button>
            </div>
        </div>
    )
}

export default AddTodo;