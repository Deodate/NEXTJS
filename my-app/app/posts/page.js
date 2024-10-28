"use client"
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Posts(){
    const [posts, setPosts] = useState([]);
    const fetchRecords = async () => {
        const response = await axios.get('http://localhost:5000/posts')
        setPosts(response.data)
    }

    useEffect(() => {
           fetchRecords()
    }, [])

    return(
        <div>
            <div>
                <h1>Register Now</h1>
                <Link href="/posts/create">Create New One</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>
                                <button>Read</button>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
    )
}