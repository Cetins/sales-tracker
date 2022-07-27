import React from "react";
import MainTitle from './MainTitle'

const Welcome = ({ shop }) => {
    const welcomeMessage = `Welcome back ${shop.name}`;
    
    return (
        <MainTitle title={welcomeMessage}/>
    )
}

export default Welcome;