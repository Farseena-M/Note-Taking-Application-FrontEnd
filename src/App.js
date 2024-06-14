import React, { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Show from './components/show'
import Create from './components/create'
import Edit from './components/edit'
import Login from './Auth/Login'
import Signup from './Auth/Signup'
import Sample from './Sample'


export const userContext = createContext()

const App = () => {
    const [note, setNote] = useState([])
    const [user, setUser] = useState([])
    const [editNote, setEditNote] = useState(null)
    const removeTask = (index) => {
        const newNote = [...note]
        newNote.splice(index, 1)
        setNote(newNote)
    }

    const updateNote = (updateNote) => {
        const newNote = note.map((n) => (n.id === updateNote.id ? updateNote : n))
        setNote(newNote)
    }
    return (
        <userContext.Provider value={{ note, setNote, editNote, setEditNote, updateNote,user, setUser }}>
            <Routes>
                <Route path='/' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/show' element={<Show removeTask={removeTask} />} />
                <Route path='/create' element={<Create />} />
                <Route path='/edit' element={<Edit />} />
                <Route path='/sample' element={<Sample />} />
            </Routes>
        </userContext.Provider>
    )
}

export default App
