import React from 'react'
import useFirestore from '../Hooks/USeFirestore'

function Images() {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className="imggrid">
            {docs && docs.map(doc => (
                <div className="imgGrid" key={doc.id}>
                    <img src={doc.url} alt='uploaded pic' />
                </div>
            ))}

        </div>
    )
}

export default Images
