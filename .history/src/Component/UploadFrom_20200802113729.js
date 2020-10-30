import React, { useState } from 'react'

function UploadFrom() {
    const [file, setFile] = useState(null)
    const type = ['image/png', 'image/jpeg']

    const changeHanlder = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
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
