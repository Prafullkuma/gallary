import React, { useState } from 'react'

const Simple = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const saveMeHanlder = () => {

    }
    return (
        <div>
            <input type="file"
                onChange={saveMeHanlder} />

        </div>
    )
}

export default Simple
