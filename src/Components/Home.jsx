import React from 'react'
import Additem from './Additem'
import View from './View'

function Home() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291cnNlfGVufDB8fDB8fHww')",
                    backgroundSize: 'cover',
                    height: '90vh',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 mt-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title fw-bolder text-center" style={{ fontSize: "50px" }}>Todo list</h5>
                                  <Additem/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                           <View/>
                        </div>
                        <div className="col-md-6">
                            <div className='p-3'>
                                <h3 className='text-white fw-bolder' style={{ fontSize: "20px" }}>Completed List</h3>
                                <table className='table table-striped table-bordered shadow rounded'>
                                    <thead className='bg-primary text-white'>
                                        <tr>
                                        <th className="py-3 text-center">S.No</th>
                                            <th className="py-3 text-center">Tile</th>
                                            <th className="py-3 text-center">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr >
                                            <td className='text-center'>1</td>
                                            <td className='text-center'>hy</td>
                                            <td className='text-center'>hloo</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" className="text-center">
                                                <p className='text-danger'>Nothing to display</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home