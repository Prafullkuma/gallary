import { useEffect, useState } from 'react'
import { projectFirestore } from '../config'
const useFirestore = (collection) => {
    const [docs, setDoc] = useState([])
    useEffect(() => {
        projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapShot) => {
                let documents = []
                snapShot.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
            })
        setDoc(documents)
    }, [collection])
    return { docs }
}
export default useFirestore