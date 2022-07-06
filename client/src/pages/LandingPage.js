import ContentLandingPage from "../components/ContentLandingPage";
import React from "react";

const LandingPage = ({setValue}) =>{
    return(
        <div style={{width:'100%'}}>
            <ContentLandingPage values={setValue}/>
        </div>
    )
}

export default LandingPage