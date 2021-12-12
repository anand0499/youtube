import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      {/* <h1>I am a headers</h1> */}
      <div className="header-left">
        <MenuIcon />
        <Link to="/youtube_clone">
          <img
            alt=""
            className="header-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </Link>
      </div>
      <div className="header-input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header-input-btn" />
        </Link>
        {/* <SearchIcon className="header-input-btn" /> */}
      </div>
      <div className="header-icons">
      <div className="icons">
        <VideoCallSharpIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
</div>
        <Avatar className="avatar"
          alt="Anand choubey"
          src="https://scontent.fccu7-1.fna.fbcdn.net/v/t1.6435-9/c0.76.740.740a/s851x315/67833425_1085965758459068_4799473838423277568_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=da31f3&_nc_ohc=Ybky1yQzF0kAX-QOloE&tn=naMwjpli_nlIG2f7&_nc_ht=scontent.fccu7-1.fna&oh=d5dbc5d53365d0b84c1a473114897f49&oe=61CC890F"
        />
      </div>
    </div>
  );
}

export default Header;
