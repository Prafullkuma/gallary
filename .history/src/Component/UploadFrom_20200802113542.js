import React, { useState } from 'react'

function UploadFrom() {
    const [file, setFile] = useState(null)
    const changeHanlder = (e) => {
        let selectedFile = e.target.files[0]
    }
    return (
        <div>
            <form>
                <input type="file"
                    onChange={changeHanlder} />
            </form>
        </div>
    )
}

export default UploadFrom
