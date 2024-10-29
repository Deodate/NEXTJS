"use client"
import axios from "axios";
import { useEffect } from "react";

export default function ({ params }) {
    const id = params.id;

    const [post,setPosts] = useState(null)

    useEffect(() => {
        if (id) {
            fetchPost()
        }
    }, [id])
    const fetchPost = async () => {
        const response = await axios.get('http://localhost:5000/posts/${id}')
        setPostSignalSetFn(response.data)
    }

    return (
        <div>
            {post && (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            )}
            <div>
                <button>Home</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>


        </div>
    )

}