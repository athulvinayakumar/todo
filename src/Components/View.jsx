import React, { useContext, useEffect, useState } from 'react'
import { deleteItemAPI, getAllAPI } from '../Services/allAPI';
import { additemContext } from '../Context/ContextShare';
import { Button } from 'react-bootstrap';

function View() {
    const { addItemResponse, setAddItemResponse } = useContext(additemContext)
    const [data, setData] = useState([]);

    const getTask = async () => {
        const reqHeader = {
            "Content-Type": "application/json",

        };
        const result = await getAllAPI(reqHeader);
        console.log(result.data);
        setData(result.data);
    }

    useEffect(() => {
        getTask()
    }, [addItemResponse])

    const handleDelete = async (id) => {
     
        const reqHeader = {
            "Content-Type": "application/json",
        }
        const result = await deleteItemAPI(id, reqHeader)
        if (result.status === 200) {
            getTask()
        }
        else {
            alert(result.response.data)
        }
    }

    return (
        <>
            <div className='p-3'>
                <h3 className='text-white fw-bolder' style={{ fontSize: "20px" }}>Pending List</h3>
                <table className='table table-striped table-bordered shadow rounded'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th className="py-3 text-center">S.No</th>
                            <th className="py-3 text-center">Tile</th>
                            <th className="py-3 text-center">Description</th>
                            <th className="py-3 text-center">Action</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 ?
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td className='text-center'>{index + 1}</td>
                                    <td className='text-center'>{item.title}</td>
                                    <td className='text-center'>{item.description}</td>
                                
                                    <div className='text-center'>
                                    <Button onClick={() => handleDelete(item._id)}  className='btn btn-danger'>
                                      Delete
                                    </Button>
                                    </div>
                                </tr>
                            ))
                            :
                            <tr>
                                <td colSpan="4" className="text-center">
                                    <p className='text-danger'>Nothing to display</p>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default View