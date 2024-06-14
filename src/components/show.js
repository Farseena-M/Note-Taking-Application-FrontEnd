import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { useAuthContext } from '../Auth/authContext'
import axios from 'axios'

const Show = ({ removeTask }) => {
    const { datas } = useAuthContext()
    console.log( datas._id);

    const Nvgt = useNavigate()
    const { note, setEditNote } = useContext(userContext)
    const handleEdit = (item) => {
        setEditNote(item)
        Nvgt('/edit')
    }

    const deleteData = async () => {
        try {
            await axios.delete(`http://localhost:4000/note/${datas._id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
        }catch (error) {
            console.error('Error deleting datas:', error);
        }
    }
    return (
        <>
            {
            note.map((item) => {
                    return (
                        <div style={{ border: '1px solid black', width: '250px' }} key={item._id}>
                            <input type='text' value={item.title} style={{ width: '240px', border: 'none', textAlign: 'center' }} /><br /><br />
                            <textarea value={item.body} cols={30} rows={5} style={{ border: 'none' }} /><br />
                            <button style={{ backgroundColor: 'red', border: 'none', color: 'white', cursor: 'pointer', position: 'relative', left: '100px' }} onClick={deleteData}>Delete</button>
                            <button style={{ backgroundColor: 'blue', border: 'none', color: 'white', cursor: 'pointer' }} onClick={() => handleEdit(item)}>Edit</button>
                        </div>
                    )
            })
            }
            <div>
                <button onClick={() => Nvgt('/create')} style={{ position: 'relative', left: '1500px', top: '50px', height: '50px', width: '100px', cursor: 'pointer' }}>Create</button>
            </div>
        </>
    )
}

export default Show

