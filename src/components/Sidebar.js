import React from 'react'
import hamburger from '../constants/hamburger.svg'
import chat from '../constants/chat.svg'
import gear from '../constants/gear.svg'
import contact from '../constants/contact.svg'
import homepage from '../constants/homepage.svg'
import newspaper from '../constants/newspaper.svg'
import photocamera from '../constants/photocamera.svg'
import statistics from '../constants/statistics.svg'
import wifi from '../constants/wifi.svg'
import {   NavLink } from 'react-router-dom'




function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_top"> <img src={hamburger} className="sidebar_img" alt="noth" width="20" height="20"/> </div>
            <div className="sidebar_ul">
                <NavLink className="sidebar_item" to="/home" activeClassName="selected"><img  src={homepage}  alt="homepage"  width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/contact" activeClassName="selected"><img  src={contact} alt="contact" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/sms" activeClassName="selected"><img  src={chat} alt="chat" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/setting" activeClassName="selected"><img  src={gear} alt="gear" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/book" activeClassName="selected"><img  src={newspaper} alt="newspaper" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/camera" activeClassName="selected"><img  src={photocamera} alt="photocamera" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/12" activeClassName="selected"><img  src={statistics} alt="statistics" width="20" height="20" /></NavLink>
                <NavLink className="sidebar_item" to="/34" activeClassName="selected"><img  src={wifi} alt="wifi" width="20" height="20" /></NavLink>
            </div>
        </div>
    )
}

export default Sidebar
