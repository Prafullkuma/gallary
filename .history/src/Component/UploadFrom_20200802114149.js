import React, { useState } from 'react'

function UploadFrom() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const type = ['image/png', 'image/jpeg']

    const changeHanlder = (e) => {
        let selectedFile = e.target.files[0]
        if (selectedFile && type.includes(selectedFile.type)) {
            setFile(selectedFile)
        }
        else {
            setFile(null);
            setError('please select an image {pngor jpeg')
        }
    }
    return (
        <div>
            <form>
                <input type="file"
                    onChange={changeHanlder} />
                <div className="output">
                    {error && <div className="error">{error</div>}}
                </div>
            </form>
        </div>
    )
}

export default UploadFrom
