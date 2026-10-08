import React, { useState } from 'react'
import Shop from './shop';


const Content = () =>{

    let [items,setItems] = useState([
        {id:1,label:"Html & Css",checked:true},
        {id:2,label:"Javascript",checked:true},
        {id:3,label:"React JS",checked:false},
    ])



    return(
        <main>  
           {/* <Shop /> */}
           <ul>
            {
                items.map((item)=>{
                    return(
                        <li key={item.id}>
                            <input type="checkbox" checked={item.checked}/>
                            <label>{item.label}</label>
                        </li>
                    )

                })
            }
           </ul>
        </main>
    )
}
export default Content;