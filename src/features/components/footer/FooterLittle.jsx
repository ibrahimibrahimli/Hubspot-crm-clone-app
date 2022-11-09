import React from 'react'
import {Link} from "react-router-dom"
 
const FooterLittle = () => {
    return(
        <>
            <div className='footerLittle'>
                <div>
                    <p>Copyright © 2022 HubSpot, Inc.</p>
                    <ul>
                        <li><Link to={"legal-stuff"}>Legal Stuff</Link></li>
                        <li><Link to={"privacy-policy"} >Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        
        </>
    )
}

export default FooterLittle