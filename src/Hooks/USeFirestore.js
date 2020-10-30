import { useEffect, useState } from 'react'
import { projectFirestore } from '../config'
const useFirestore = (collection) => {
    const [docs, setDoc] = useState([])
    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapShot) => {
                let documents = []
                snapShot.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                })
                setDoc(documents)
            })
        return () => unsub();
    }, [collection])
    return { docs }
}
export default useFirestore