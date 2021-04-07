import React from 'react'
import "./Footer.css"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid , Slider } from "@material-ui/core"
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
              <img src={window.location.origin + '/arjith.jpg'} alt="" className="footer_albumlogo"/>
              <div className="footer_songinfo">
              <h4>Arjith</h4>
              <p>arjith singh
              </p></div>
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleFilledIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green "/>
            </div>
            <div className="footer_right">  
            <Grid container spacing={2}>
                <Grid item>
                  <PlaylistPlayIcon />
                </Grid>
                <Grid item>
                  <VolumeDownIcon />
                </Grid>
                <Grid item xs>
                  <Slider />
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Footer
