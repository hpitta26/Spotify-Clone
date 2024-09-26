import React, {useState, useEffect, useContext} from 'react'
import SearchIcon from './icons/SearchIcon'

import './Library.css'

import PlaylistCard from './innerComps/PlaylistCard'
import { UserContext } from '../App'
import MenuDotIcon from './icons/MenuDotIcon'
import LibraryIcon from './icons/LibraryIcon'
import PlusIcon from './icons/PlusIcon'
import ArrowIcon from './icons/ArrowIcon'


function Library() {
    const user = useContext(UserContext).user

    const [libColor, setLibColor] = useState('#b3b3b3')
    const handleLibEnter = () => {
        setLibColor('white')
    }
    const handleLibLeave = () => {
        setLibColor('#b3b3b3')
    }

    const [hbColor, setHbColor] = useState('#b3b3b3')
    const handleHbEnter = () => {
        setHbColor('white')
    }
    const handleHbLeave = () => {
        setHbColor('#b3b3b3')
    }



    if (!Object.keys(user).length) { //If user == empty (if useContext() hasn't returned user yet)
        return (
            <div className='mid1'>
                <div className='lib-header'>Library Header</div>
                <div className='lib-scroll'>
                    <div className='lib-list-header'>
                        <div className='llh-item-1'>
                            <SearchIcon/>
                        </div>
                        <div className='llh-item-2'>
                        <div className='llh-item-2-inner' onMouseEnter={handleHbEnter} onMouseLeave={handleHbLeave}>
                                <div className='llh-item-2-inner-child'>
                                    Recents
                                    <MenuDotIcon color={hbColor} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        )
    } else {
        return (
            <div className='mid1'>
                <div className='lib-header'>
                    <div className='lib-header-item-1'>
                        <div className='lhi1-left' onMouseEnter={handleLibEnter} onMouseLeave={handleLibLeave}>
                            <LibraryIcon color={libColor} />
                            <b>Your Library</b>
                        </div>
                        <div className='lhi1-right'> 
                            <div className='lhi1-right-inner'>
                                <PlusIcon/>
                                <ArrowIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='lib-header-item-2'>
                        <div>Playlists</div>
                        <div>Artists</div>
                        <div>Podcasts & Shows</div>
                    </div>
                    
                </div>

                <div className='lib-scroll'>

                    <div className='lib-list-header'>
                        <div className='llh-item-1'>
                            <SearchIcon/>
                        </div>
                        <div className='llh-item-2'>
                            <div className='llh-item-2-inner' onMouseEnter={handleHbEnter} onMouseLeave={handleHbLeave}>
                                <div className='llh-item-2-inner-child'>
                                    Recents
                                    <MenuDotIcon color={hbColor} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Diplay all of the User's playlists */}
                    {user.playlists.map(p =>
                        <PlaylistCard playlist={p} artist={user.username}/>
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

                  </div>
            </div>    
        )
    }

    
  }
  
  export default Library