import React from 'react'
import "./sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp, faCalculator, faChartLine, faHouse, faMailBulk, faManatSign, faReceipt, faRightLeft } from '@fortawesome/free-solid-svg-icons';
import { faFaceSmile, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                    <FontAwesomeIcon icon={faHouse} className='sidebarIcons'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon  icon={faArrowTrendUp}  className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faChartLine} className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faUser} className='sidebarIcons'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faCalculator} className='sidebarIcons'/>
                        Products
                        <FontAwesomeIcon icon="fas fa-analytics" />
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faRightLeft} className='sidebarIcons'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faReceipt} className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faMailBulk} className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faFaceSmile} className='sidebarIcons'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faMessage} className='sidebarIcons'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <FontAwesomeIcon icon={faManatSign} className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faArrowTrendUp} className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <FontAwesomeIcon icon={faHouse} className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar