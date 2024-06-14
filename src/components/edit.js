import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../App'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

const Edit = () => {
    const Nvgt = useNavigate()
    const {editNote,updateNote} = useContext(userContext)
    const [noteContent,setNoteContent] = useState({title:'',body:''})
    useEffect(() => {
      if(editNote){
        setNoteContent(editNote)
      }
    }, [editNote])

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNoteContent({...noteContent,[name]:value})
    

    //     try {
    //       const formData = new FormData();
    //       formData.append('title', title);
    //       formData.append('body', body);
    //       const response = await axios.post(`http://localhost:4000/note/create`, formData, {
    //           headers: {
    //               Authorization: `Bearer ${localStorage.getItem('userToken')}` 
    //           }
    //       });                
    //           console.log(response);
    //           Nvgt('/show')
         
    //   } catch (err) {
    //       console.error(err);
    //   }
        
    }

    const handleSave = () =>{
        updateNote(noteContent)
        Nvgt('/show')
    }
    
  return (
    <div>
    <h2>Edit Note</h2>
    <input
        type='text'
        name='title'
        value={noteContent.title}
        onChange={handleChange}
    /><br /><br />
    <textarea
        name='body'
        value={noteContent.body}
        onChange={handleChange}
    ></textarea><br /><br />
    <button onClick={handleSave} style={{cursor:'pointer'}}>Save</button>
</div>
  )
}

export default Edit