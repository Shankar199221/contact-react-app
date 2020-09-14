import React from 'react'
import glass from '../constants/glass.svg'
import sms from '../constants/sms.svg'
import plus from '../constants/plus.svg'
import notification from '../constants/notification.svg'

function Header() {
    return (
        <div className="header">
            <div className="header_ul">
                <div className="header_left">
                    <img className="header_searchicon" src={glass}  alt="glass"  width="20px" height="20px" /> 
                    <input className="header_input"  type="text" />
                </div>
                <div className="header_right">
                <div className="header_li header_add"><button><img  src={plus}  alt="plus"  width="10px" height="10px" />&nbsp;Add</button></div>
                <div className="header_li header_sms"><img  src={sms}  alt="sms"  width="15px" height="15px" /></div>
                <div className="header_li header_contact">Johny !</div>
                <div className="header_li header_Icon"><img  src={notification}  alt="notification"  width="15px" height="15px" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header
