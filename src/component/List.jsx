import React from 'react'

const List = () => {
    return (
        <div>
            <div className='text-center'>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <ol className='mx-5 justify-content-center'>
                            <li className='bg-primary mb-3 p-3 rounded'>
                                <div className='row'>
                                    <div className='col-10'>
                                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, modi.</p>
                                    </div>
                                    <div className='col-2'>
                                        <span className='btn btn-danger'>
                                            <i className='fa fa-trash'>

                                            </i>
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
