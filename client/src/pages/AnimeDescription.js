import React, { useEffect, useState} from "react";
import '../componentStyle/anime-description.css'
import baseAPI from "../API/baseAPI";

const AnimeDescription = ({animeName}) =>{
    console.log(animeName);
    const [value, setValue] = useState([])

    const handleReturn = () =>{
        window.location.href = "/"
    }

    useEffect( ()=>{
        const fecthApi = async() =>{
            const anime_target = animeName
            try {
                const server = await baseAPI.get(`/anime-description/${anime_target}`)
                const datas = await server.data.data
                const convert = JSON.parse(datas)
                setValue(convert)
            } catch (error) {
                console.log(error);
            }
        }
        fecthApi()
    },[animeName])

    return(
    <div className="container">
        <div className="container-data">
            <h1>{animeName}</h1>
            {value?
            <div>
            <img src={value.img} alt=""/>
            <button style={{float:'right',width:'70px',height:'40px',borderRadius:'5px', cursor:'pointer'}} onClick={()=>handleReturn()}>Back</button>
            </div>:null
            }
            <div className="container-p-description">
                <h1 style={{textAlign:'center'}}>Description</h1>
            {value&&value.data?value.data.map((e,i)=>
                <p key={i}>{i+1}. {e.fact}</p>
            ):null}
             </div>
        </div>
    </div>
    )
}

export default AnimeDescription