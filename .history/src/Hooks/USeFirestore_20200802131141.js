import { useEffect, useState } from 'react'
import { projectFirestore } from '../config'
const useFirestore = (collection) => {
    const [docs, setDoc] = useState([])
    useEffect(() => {
        projectFirestore.collection(collection)
            .onSnapshot((snapShot) => {

            })
    }, [collection])
    return { docs }
}
export default useFirestore