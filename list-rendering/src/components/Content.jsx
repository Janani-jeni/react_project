import React, { useState } from 'react'
import Shop from './shop';
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";


const Content = () =>{

    let [items,setItems] = useState([
        {id:1,label:"Html & Css",checked:true},
        {id:2,label:"Javascript",checked:true},
        {id:3,label:"React JS",checked:false},
    ])

    let [newItem,setNewItem] = useState("")
    let [isEditing, setIsEditing] = useState (false)

    let handleChecked = (id) => {
        let newListItems = items.map((item)=>{return item.id === id? {...item, checked : !item.checked} : item;})
        setItems (newListItems)
    };

    let handleUpdate = () => {
        setIsEditing(true)
    }

    
    return(
        <main>  
           {/* <Shop /> */}
           <div>
                <input type="text" value={newItem} placeholder="Add New Item" onChange={(e)=>{setNewItem(e.target.value)}}/>
                <button>{isEditing ? "Save": "Add"}</button>
           </div>
           <ul>
            {
                items.map((item)=>{
                    return(
                        <li key={item.id} className='item'>
                            <input type="checkbox" checked={item.checked} onChange={()=> handleChecked(item.id)}/>
                            <label>{item.label}</label>
                            <MdEdit role="button" tabIndex={0} onClick={handleUpdate} />
                            <FaTrashAlt role="button" tabIndex={0}/>
                        </li>
                    )

                })
            }
           </ul>
        </main>
    )
}
export default Content;