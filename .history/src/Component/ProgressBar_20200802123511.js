import React from 'react'
import useStorage from '../Hooks/UseStorage'
import './progressBar.css'
function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file)
    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

    console.log(progress, url)
    return (
        <div className="Progress_Bar" style={{ width: progress + '%' }}>

        </div>
    )
}

export default ProgressBar
