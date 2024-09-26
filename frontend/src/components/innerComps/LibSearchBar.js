import React, {useState, useEffect, useContext, useRef} from 'react'
import './LibSearchBar.css'

import SearchIcon from '../icons/SearchIcon';


function LibSearchBar(props) {
    const [currInput, setCurrInput] = useState('')
    const inputRef = useRef(null);

    const [search, setSearch] = useState(false)
    const handleClick = (e) => {
        if (search) {
            setCurrInput('') //Delete Text in Search when its closed
        }
        setSearch(!search)
    }
    const handleClickOutside = (e) => { //Handles outside clicks
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setSearch(false)
            setCurrInput('')
        }
    }

    useEffect(() => { //Debouncing function --> allows time-consuming operations to not be fired too often (Delay between calls)
        const handler = setTimeout(() => {
            props.sendToParent(currInput); //Send debounced value to parent
        }, 500); // Delay in milliseconds

        return () => {
            clearTimeout(handler); // Cleanup timeout on unmount or when inputValue changes
        };
    }, [currInput])


    useEffect(() => {
        // Add event listener to detect clicks outside
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup function to remove the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });


    const handleChange = (e) => {
        // e.preventDefault()
        setCurrInput(e.target.value)
    }

    return (
        <div className='search-bar-container'>
            <div className='search-bar-subcontainer' ref={inputRef}>
                {(search) ? <SearchIcon onClick={handleClick} class2='search-icon-nonactive'/> : <SearchIcon onClick={handleClick}/>}
                
                {(search) ? (
                    <input id='searchInput' className='search-bar-sb' type='text' placeholder='Search in Your Library' autocomplete="off" onChange={handleChange} value={currInput} />
                    ) : (
                    <></>
                )}      
            </div>
        </div>
    )
}

export default LibSearchBar


//useEffect --> used to update the component whenever something changes within it
//              DependencyArray can be specified, so that useEffect only fired off when that changes