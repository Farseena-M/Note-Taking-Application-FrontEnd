import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import axios from 'axios'
// import { ColorPicker, useColor } from "react-color-palette";
// import "react-color-palette/lib/css/styles.css";

const Create = () => {
    const Nvgt = useNavigate()
    // const [color, setColor] = 
    // useColor("hex", "#121212");
    const { note, setNote } = useContext(userContext)

    const titleRef = useRef({})
    const descRef = useRef({})

    const handleChange = async () => {
        const newTitleRef = titleRef.current.value
        const newDescRef = descRef.current.value
        const value = { title: newTitleRef, body: newDescRef }
        setNote([...note, value])
        try {
            const data = {
                "title": newTitleRef,
                "body": newDescRef
            }
            const response = await axios.post(`http://localhost:4000/note/create`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('userToken')}`
                }
            });
            console.log(response);
            const details = response.data.data
            localStorage.setItem('details', JSON.stringify(details))
            Nvgt('/show')

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div style={{ position: 'relative', left: '600px', top: '80px' }}>
            <h1 style={{ position: 'relative', left: '60px' }}>Create</h1>
            <input type='text' placeholder='tittle....' style={{ width: '240px' }} ref={titleRef} /><br /><br />
            <textarea cols={30} rows={20} ref={descRef} /><br />
            {/* <div>
                <ColorPicker width={456} height={228}
                    color={color}
                    onChange={setColor} hideHSV dark />;
            </div> */}
            <Link to='/show'>
                <button style={{ position: 'relative', left: '80px', cursor: 'pointer' }} onClick={handleChange}>Save</button>
            </Link>
        </div>
    )
}

export default Create