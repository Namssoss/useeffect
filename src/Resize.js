import {useEffect} from "react"
import {useState} from "react"


function Resize(){
    const [resize, setResize] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setResize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return(
        <div>
            <h1>{resize}</h1>
        </div>
    )
}

export default Resize