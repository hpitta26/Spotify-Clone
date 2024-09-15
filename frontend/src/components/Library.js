import React, {useState, useEffect, useContext} from 'react'
import './Library.css'
import { Link } from 'react-router-dom'

import PlaylistCard from './innerComps/PlaylistCard'
import { UserContext } from '../App'

function Library() {

    const user = useContext(UserContext).user

    

    if (!Object.keys(user).length) { //If user == empty (if useContext() hasn't returned user yet)
        return (
            <div className='mid1'>
                <div className='lib-header'>Library Header</div>
                <div className='lib-scroll'>
                    <div className='lib-list-header'>
                        <div className='llh-item-1'>
                            <b>Search</b>
                        </div>
                        <div className='llh-item-2'>
                            <b>Recents</b>
                        </div>
                    </div>
                </div>
            </div>    
        )
    } else {
        return (
            <div className='mid1'>
                <div className='lib-header'>Library Header</div>

                <div className='lib-scroll'>

                    <div className='lib-list-header'>
                        <div className='llh-item-1'>
                            <b>Search</b>
                        </div>
                        <div className='llh-item-2'>
                            <b>Recents</b>
                        </div>
                    </div>

                    {/* Diplay all of the User's playlists */}
                    {user.playlists.map(p =>
                        <PlaylistCard playlist={p}/>
                    )}
                    
                    <div className='lib-list-item'> 
                        hi2
                    </div>
                    <div className='lib-list-item'> 
                        hi3
                    </div>
                    <div className='lib-list-item'> 
                        hi4
                    </div>
                    <div className='lib-list-item'> 
                        hi5
                    </div>
                    <div className='lib-list-item'> 
                        hi6
                    </div>
                    <div className='lib-list-item'> 
                        hi8
                    </div>

                  </div>
            </div>    
        )
    }

    
  }
  
  export default Library