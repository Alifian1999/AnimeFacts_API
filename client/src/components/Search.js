import baseAPI from "../API/baseAPI";
import React, { useState, useEffect } from "react";
import '../componentStyle/search.css'


const SearchComponents = () =>{
    const [value, setValue] = useState('')
    console.log(value);

    const handleSubmit = async (e) =>{
        try {
            e.preventDefault()
            const server = await baseAPI.get('/')
            const datas = await server.data.data
            const convert = JSON.parse(datas)
            setValue(convert.data)
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Find your favourite animal"
                onChange={e => setValue(e.target.value)}
                />
                <button>click</button>
            </form>
            <div>
                <h1>result</h1>
                <div>
                    {value?value.map((e,i)=>
                    <div style={{width:'100%',objectFit:'cover', display:'grid', gridTemplateColumns:'3'}} key={i}>
                        <h3>{e.anime_name}</h3>
                        <img style={{objectFit:'cover', display:'inherit',width:'100%'}} src={e.anime_img} alt="" />
                    </div>
                    ):null}
                </div>
            </div>
        </div>
    )
}

export default SearchComponents