"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/posts", { title, content });
            // Redirect to posts page or show success message
            router.push("/");
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="flex flex-col items-center py-20">
            <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6 border p-6 w-96 bg-white shadow-md rounded-md">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    className="p-2 border border-slate-500 rounded"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    className="p-2 border border-slate-500 rounded h-24"
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit" className="w-full bg-green-500 text-white py-1.5 rounded hover:bg-green-600">
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default Create;
