import React from 'react'

const Form = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-center mb-3'>React To Do List</h1>
                <div className='row mx-5 p-3 justify-content-center'>
                    <div className='col-5'>
                        <input type="text" className='form-control' placeholder='Enter List...' />
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary'>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
