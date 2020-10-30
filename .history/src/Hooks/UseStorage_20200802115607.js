import { useEffect, useState } from 'react'
import { projectStorage } from '../../config'
const UseStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    const useEffect(() => {
        //reffences 
        const storageRef = projectStorage.ref(file.name)
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) + 100
        })
    }, [file])

}

export default UseStorage
