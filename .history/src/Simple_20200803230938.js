import React, { useState } from 'react'

const Simple = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const type = ['image/png', 'image/jpeg']
    const saveMeHanlder = (e) => {
        const selected = e.target.files[0]

        if (selected && type.includes(selected.type)) {

        }
    }
    return (
        <div>
            <input type="file"
                onChange={saveMeHanlder} />

        </div>
    )
}

export default Simple
