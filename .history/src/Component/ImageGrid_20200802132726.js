import React from 'react'
import useFirestore from '../Hooks/USeFirestore'
import './imageGrid.css'
function Images() {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className="img-Grid">
            {docs && docs.map(doc => (
                <div className="imgGrid" key={doc.id}>
                    <img src={doc.url} alt='uploaded pic' />
                </div>
            ))}

        </div>
    )
}

export default Images
