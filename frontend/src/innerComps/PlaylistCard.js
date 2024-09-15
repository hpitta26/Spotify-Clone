import React, {useState} from 'react'
import './PlaylistCard.css'
import { Link } from 'react-router-dom'

function PlaylistCard(props) {
  
    return (
      <div className='playlistC-whole'>
            <div className='plc-image'>
              Image
            </div>
            <div className='plc-description'>
              
              {props.playlist}
              <div className='plc-des-item2'>Playlist <b>·</b> Artist</div>
            </div>
      </div>    
    )
  }
  
  export default PlaylistCard