import React from 'react'
import './SideBar.css';
import SideBarOption from "./SideBarOption"
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import {useDataLayerValue} from "./DataLayer"

function SideBar() {
  const [{playlists} , dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
          <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo" className="sidebar_logo" />
          <SideBarOption Icon={HomeIcon} title="Home"/>
          <SideBarOption Icon={SearchIcon} title="Search"/>
          <SideBarOption Icon={LibraryMusicIcon} title="Your Library"/>
          <br/>
          <strong className="sidebar_title">PLAYLISTS</strong>
          <hr/>
          {playlists?.items?.map(playlist=>(
          <SideBarOption title={playlist.name}/>
            
          ))}

        </div>
    )
}

export default SideBar
