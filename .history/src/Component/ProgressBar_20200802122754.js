import React from 'react'
import useStorage from '../Hooks/UseStorage'
function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)
    console.log(url, progress)
    return (
        <div className="Progress_Bar">
            pregressing
        </div>
    )
}

export default ProgressBar
