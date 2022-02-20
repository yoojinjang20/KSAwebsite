import React from 'react'
import "./Footer.css"
import { BottomNavigationAction} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <h4>Links</h4>
                        <ui className="list-unstyled">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Activities/Clubs</li>
                            <li>Information</li>
                            <li>Sponsorships</li>
                        </ui>
                    </div>
                    {/* Column 2 */}
                    <div className= "col">
                        <h4>Contact Us</h4>
                        <ui className="list-unstyled">
                            <li>Email: su_ksa@connect.ust.hk</li>
                            <li>President's Kakao ID:junswoo98</li>
                            <li>Internal VP's Kakao ID: choi0woo0suk</li>
                            <li>External VP's Kako ID: junwon0412</li>
                        </ui>
                    </div>
                    {/* Column 3  */}
                    <div className = "col">
                        <h4>Social</h4>
                        <ui className="list-unstyled">
                            <li><BottomNavigationAction label="Facebook" icon={<FacebookIcon style={{fill: "#3b5998"}}/>}/></li>
                            <li><BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}/>}/></li>
                            <li><BottomNavigationAction label="Email" icon={<EmailIcon style={{fill: "#000000"}}/>}/></li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className= "row">
                    <p className= "col-sm">
                        &copy;{new Date().getFullYear()} KOREAN STUDENTS' ASSOCIATION | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>

            </div>
        </div>
        
        
    )
}

export default Footer;
