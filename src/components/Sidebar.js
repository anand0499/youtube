import React from 'react';
import SidebarRow from './SidebarRow';
import "./Sidebar.css"
import HomeIcon from "@material-ui/icons/Home"
import SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import OndemandVideoIcon  from '@material-ui/icons/OndemandVideo';
import HistoryIcon from '@material-ui/icons/History'
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
function Sidebar() {
    return (
        <div className="Sidebar">
            {/* <h1>Anand choubey</h1> */}
            <SidebarRow  selected Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
            <SidebarRow Icon={HistoryIcon} title="History"/>
            <SidebarRow Icon={OndemandVideoIcon} title="Your Vedios"/>
            <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Vedios"/> 
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More"/> 
            
            <hr />
        </div>
    )
}

export default Sidebar;
