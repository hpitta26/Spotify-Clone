import React, {useState, useEffect, useContext} from 'react'
import './Library.css'

import SearchIcon from './icons/SearchIcon'
import MenuDotIcon from './icons/MenuDotIcon'
import LibraryIcon from './icons/LibraryIcon'
import PlusIcon from './icons/PlusIcon'
import ArrowIcon from './icons/ArrowIcon'

import PlaylistCard from './innerComps/PlaylistCard'
import LibSearchBar from './innerComps/LibSearchBar'
import { UserContext } from '../App'


function Library() {
    const user = useContext(UserContext).user

    const [searchValue, setSearchValue] = useState('')

    const [filtPlaylists, setFiltPlaylists] = useState([])
    const searchChange = (data) => {
        //Match 'search value' to Playlist Titles with (lowercase & no whitespaces)
        const fpl = user.playlists.filter((pl) => pl.title.toLowerCase().replace(/\s/g, "").includes(data.toLowerCase().replace(/\s/g, "")))
        setFiltPlaylists(fpl)
        setSearchValue(data)
    }


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
                            <LibSearchBar sendToParent={searchChange}/>
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
                    { (searchValue == '') ? 
                        (user.playlists.map(p =>
                            <PlaylistCard playlist={p} artist={user.username}/>
                        ) 
                    ) : (filtPlaylists.map(p => //Here Spotify uses --> lowerCase & noSpace to match (and character frequency>2 if not 1st letter of the Title)
                            <PlaylistCard playlist={p} artist={user.username}/>
                        ) 
                    ) }
                    
                    <div className='lib-list-item'> 
                        {searchValue}
                    </div>

                  </div>
            </div>    
        )
    }

    
  }
  
  export default Library