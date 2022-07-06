import React from "react";
import '../componentStyle/anime-description.css'

const AnimeDescription = ({value}) =>{
    console.log(value);
    return(
    <div className="container">
        <div className="container-data">
            {value?
            <img src={value.img} alt=""/>:null
            }
            {value&&value.data?value.data.map((e,i)=>
                <div>
                    <p key={i}>{e.fact}</p>
                </div>
            ):null}
        </div>
    </div>
    )
}

export default AnimeDescription