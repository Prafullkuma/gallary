import React, { useEffect } from 'react'
import useStorage from '../Hooks/UseStorage'
import './progressBar.css'
function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)
    useEffect(() => {
    }, [url])

    console.log(progress, url)
    return (
        <div className="Progress_Bar" style={{ width: progress + '%' }}>

        </div>
    )
}

export default ProgressBar
