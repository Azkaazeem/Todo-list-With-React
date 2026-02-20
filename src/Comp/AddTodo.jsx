import React from 'react'

const AddTodo = () => {
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder='Enter Todo' />
                    </div>
                    <div className="col-md-auto">
                        <input type="date" name="" id="" />
                    </div>
                    <div className="col col-lg-2">
                        <button className='btn btn-success'>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddTodo;