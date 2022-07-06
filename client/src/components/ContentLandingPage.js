import baseAPI from "../API/baseAPI";
import React, { useState, useEffect } from "react";
import '../componentStyle/content-landingpage.css'
import { Link } from "react-router-dom";


const ContentLandingPage = ({values, setAnimeName}) =>{
    const [value, setValue] = useState('')

    useEffect(()=>{
    const handleSubmit = async () =>{
        try {
            const server = await baseAPI.get('/')
            const datas = await server.data.data
            const convert = JSON.parse(datas)
            setValue(convert.data)
        } catch (error) {
            console.log(error);
        }
    }
    handleSubmit()
    },[])

    const handleClick = async(e) =>{
        const anime_target = e.anime_name
        setAnimeName(anime_target)
    }

    return(
        <div> 
            <div className="container">
                <div className="content-container">
                    {value?value.map((e,i)=>
                    <div style={{width:'100%',objectFit:'cover',marginTop:'30px'}} key={i}>
                        <h3>{e.anime_name}</h3>
                       <Link to='anime-description'> <img onClick={()=>handleClick(e)} style={{objectFit:'cover',width:'100%',height:'200px',cursor:'pointer'}} src={e.anime_img} alt="" /> </Link>
                    </div>
                    ):null}
                </div>
            </div>
        </div>
    )
}

export default ContentLandingPage