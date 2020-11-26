import React from 'react'
import * as IoIcons from "react-icons/io"
import * as AiIcons from "react-icons/ai"
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: "Servers",
        path: "/servers",
        icon: <FaIcons.FaServer/>,
        cName: "nav-text"
    },
    {
        title: "Patching",
        path: "/Patching",
        icon: <FaIcons.FaArrowAltCircleUp/>,
        cName: "nav-text"
    },
    {
        title: "Reports",
        path: "/reports",
        icon: <RiIcons.RiFileChartLine/>,
        cName: "nav-text"
    },
    {
        title: "Performance",
        path: "/performance",
        icon: <IoIcons.IoMdAnalytics/>,
        cName: "nav-text"
    },
    {
        title: "Proactive Monitoring",
        path: "/proactive-monitoring",
        icon: <AiIcons.AiOutlineMonitor/>,
        cName: "nav-text"
    },

]