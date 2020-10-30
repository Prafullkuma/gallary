import React from 'react'
import useFirestore from '../Hooks/USeFirestore'

function Images() {
    const {docs}=useFirestore('images')
    return (
        <div>
            images
            
        </div>
    )
}

export default Images
