import axios from "axios";
import { useEffect } from "react";

export default function ({params}){
    const id = params.id;

    useEffect(() => {
        if(id){
            fetchPost()
        }
    }, [id])
    const fetchPost = async () => {
        const response = await axios.get('http://localhost:5000/posts/${id}')
    }

}