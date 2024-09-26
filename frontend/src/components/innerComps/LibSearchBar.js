import React, {useState, useEffect, useContext} from 'react'
import './LibSearchBar.css'

import { UserContext } from '../App'


function LibSearchBar() {
    const user = useContext(UserContext).user

    return (
        <div>Library Search Bar</div>     
    )
}

    
  
export default LibSearchBar