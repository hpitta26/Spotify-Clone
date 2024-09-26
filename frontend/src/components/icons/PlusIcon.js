import React, {useState} from 'react'
import './PlusIcon.css'

const PlusIcon = () => {
    const [color, setColor] = useState('#b3b3b3')
    const handleEnter = () => {
        setColor('white')
    }
    const handleLeave = () => {
        setColor('#b3b3b3')
    }

    return (
        <svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" fill={color} onMouseEnter={handleEnter} onMouseLeave={handleLeave} viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
    )
}

export default PlusIcon