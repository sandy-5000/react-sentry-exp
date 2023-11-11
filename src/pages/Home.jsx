import { useEffect, useState } from "react"

function Home() {

    const [name, setName] = useState(null)
    const [timeInterval, setTimeInterval] = useState(null)
    const [length, setLength] = useState(0)

    useEffect(() => {
        const inter = setInterval(() => {
            setName(prev => {
                if (prev) {
                    return null
                }
                return 'Sandy Blaze'
            })
        }, 5000)
        setTimeInterval(inter)
        return () => {
            clearInterval(timeInterval)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="a-center" style={{ height: '100%' }}>
            <div>
                <h2 style={{ color: '#f5f5f5', fontWeight: '500' }}>Home Page!</h2>
                <h2 style={{ color: '#f5f5f5', fontWeight: '500' }}>Hello {name || "User"}!</h2>
                <button onClick={() => setLength(name.length)}>Name: {length}</button>
            </div>
        </div>
    )
}

export default Home
