import ContentLandingPage from "../components/ContentLandingPage";
import React from "react";

const LandingPage = ({setValue, setAnimeName}) =>{
    return(
        <div style={{width:'100%'}}>
            <ContentLandingPage values={setValue} setAnimeName={setAnimeName}/>
        </div>
    )
}

export default LandingPage