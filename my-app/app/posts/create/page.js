"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
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
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-6 border p-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                    required
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="p-2 border border-gray-300 rounded h-24"
                    required
                />
                <button className='w-full bg-green-300 py-1.5'>
                    Create Post
                </button>
            </form>
        </div>
    );
};

export default Create;
