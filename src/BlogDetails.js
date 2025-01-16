import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import useDeleteBlog from "./useDeleteBlog";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, isPending,error} = useFetch('http://localhost:8000/blogs/'+id);
    const {deleteBlog} = useDeleteBlog();


    const handleClick = ()=>{
        deleteBlog('http://localhost:8000/blogs/'+ blog.id);
    }

    return (
        <div className="blog-details">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blog &&(
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className="body">{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
         </div>
    );
}
 
export default BlogDetails;