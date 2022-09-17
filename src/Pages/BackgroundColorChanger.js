import React from 'react';
import { useParams } from 'react-router-dom';

export const BackgroundColorChanger = () =>{
    let { colorname } = useParams();
    
    return(
       <main style={{ height: "100vh", backgroundcolor: `${colorname}` }}>
        Background Color Changer
        </main>
    )
}
