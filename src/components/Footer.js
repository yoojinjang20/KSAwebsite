import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
    return (
        
        <BottomNavigation>
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}/>}/>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}/>}/>
            <BottomNavigationAction label="Email" icon={<EmailIcon style={{fill: "#000000"}}/>}/>
        </BottomNavigation>
        
    )
}

export default Footer
