"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const fetchRecords = async () => {
        const response = await axios.get("http://localhost:5000/posts");
        setPosts(response.data);
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    return (
        <div className="px-48 py-20">
            <div className="flex justify-between mb-8">
                <h1 className="text-2xl font-bold">Register Now</h1>
                <Link href="/posts/create" className="px-2 py-2 bg-green-500 rounded text-white">
                    Create New One
                </Link>
            </div>
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th scope="col" className="px-6 py-2 text-left font-medium text-gray-600 uppercase">ID</th>
                        <th scope="col" className="px-6 py-2 text-left font-medium text-gray-600 uppercase">Title</th>
                        <th scope="col" className="px-6 py-2 text-left font-medium text-gray-600 uppercase">Contents</th>
                        <th scope="col" className="px-12 py-2 text-left font-medium text-gray-600 uppercase">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-gray-700">{post.id}</td>
                            <td className="px-6 py-4 text-gray-700">{post.title}</td>
                            <td className="px-6 py-4 text-gray-700">{post.content}</td>
                            <td className="px-6 py-4">
                                <div className="flex space-x-2">
                                    <button className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600">
                                        Read
                                    </button>
                                    <button className="px-3 py-1 text-white bg-yellow-500 rounded hover:bg-yellow-600">
                                        Edit
                                    </button>
                                    <button className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
