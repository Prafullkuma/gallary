import React from 'react'
import useStorage from '../Hooks/UseStorage'
function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)
    console.log(progress, url)
    return (
        <div className="Progress_Bar" style={{ width: progress + '%' }}>
            pregressing
        </div>
    )
}

export default ProgressBar
