import React from "react";
import { Puff } from 'react-loading-icons'
import { LinkedInButton } from "./buttons/linkedin-button";

export const BadgeList = ({ badges }) => (
    <div className="badge-list">        

        {badges.length <= 0 ? <p>Loading... <Puff stroke="#0000FF" /> <Puff stroke="#0000FF" /></p>  : null}

    {
            badges.map(badge => {
                return <div key={badge.id}>{badge.description}<img key={badge.id} alt="Badge" src={badge.image} className="profile__avatar" /></div>;
            })
            
    }       
        {badges.length > 0 ? <LinkedInButton/> : null}
        
    </div>
);
