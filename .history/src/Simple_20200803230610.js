import React from 'react'

const Simple = () => {

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
