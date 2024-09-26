import React, {useState} from 'react'
import './PlaylistCard.css'

function PlaylistCard(props) {
    const plImage = '/logo192.png' //React expects images to be in public directory
    
  
    return (
      <div className='playlistC-whole'>
            <div className='plc-frame'>
              {/* image */}
              <img src={plImage} alt='pic'></img>
            </div>
            <div className='plc-description'>
              <div className='plc-title'>{props.playlist.title}</div>
              <div className='plc-des-item2'>
                <div className='plc-des-item2-body'>{props.playlist.playlist ? 'Playlist' : 'Album'} <span>·</span> {props.artist}</div> 
              </div>
            </div>
      </div>    
    )
  }
  
  export default PlaylistCard