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
                    <div className="col">
                        <h3>Links</h3>
                        <ui className="list-unstyled">
                            <li><a href="./Home">Home</a></li>
                            <li><a href="./About Us">About Us</a></li>
                            <li><a href="./Activities">Activities/Clubs</a></li>
                            <li><a href="./Information">Information</a></li>
                            <li><a href="./Sponsorships">Sponsorships</a></li>
                        </ui>
                    </div>
                
                    <div className= "col">
                        <h3>Contacts</h3>
                        <ui className="list-unstyled">
                            <li>Email: su_ksa@connect.ust.hk</li>
                            <li>President's Kakao ID:junswoo98</li>
                            <li>Internal VP's Kakao ID: choi0woo0suk</li>
                            <li>External VP's Kako ID: junwon0412</li>
                        </ui>
                    </div>
                 
                    <div className = "col">
                        <h3>Follow</h3>
                        <div className="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fas fa-envelope"></i></a>
                        </div>
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

