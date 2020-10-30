import React from 'react'

function UploadFrom() {
    const changeHanlder = (e) => {
        console.log('change')
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
