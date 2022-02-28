import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                    <img src="house-solid.svg" alt="" className='sidebarIcons'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line-solid.svg" alt="" className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line.svg" alt="" className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <img src="house-solid.svg" alt="" className='sidebarIcons'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line-solid.svg" alt="" className='sidebarIcons'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line.svg" alt="" className='sidebarIcons'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line.svg" alt="" className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                    <img src="house-solid.svg" alt="" className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line-solid.svg" alt="" className='sidebarIcons'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line.svg" alt="" className='sidebarIcons'/>
                        Messages
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem ">
                    <img src="house-solid.svg" alt="" className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line-solid.svg" alt="" className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                    <img src="chart-line.svg" alt="" className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar