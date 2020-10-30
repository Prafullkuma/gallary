import React from 'react'
import useFirestore from '../Hooks/USeFirestore'

function Images() {
    const {docs}=useFirestore('images')
    console.log(docs)
    return (
        <div className="imggrid">
            images
            
        </div>
    )
}

export default Images
