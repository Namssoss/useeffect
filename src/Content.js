import {useEffect} from "react"
import {useState} from "react"

const tabs = ['posts', 'comments', 'albums']

function Content(){
    const [title, setTitle] = useState('')
    const [posts, setPost] = useState([])
    const [type, setType] = useState('posts')
    const [button, setButton] = useState(false)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(Array => setPost(Array));
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            setButton(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        return () =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return(
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        background: '#333',
                    } : {}}
                    onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <ul>
            {posts.map(post => (
                <li key={post.id}>
                    {post.title || post.name}
                </li>
            ))}
            </ul>
            {button && 
                <button 
                    style={{
                       position: "fixed",
                       right: 20,
                       bottom: 20 
                    }}>
                    Go to top
                </button>
            }
        </div>
    )
}

export default Content