import { useEffect, useState } from 'react'
import { projectFirestore } from '../config'
const useFirestore = (collection) => {
    const [docs, setDoc] = useState([])
    useEffect(() => {

    }, [collection])
    return { docs }
}