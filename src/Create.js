import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Laith');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        const blog = { title, body, author }
        
        setIsPending(true);

        e.preventDefault();
            fetch('http://localhost:8000/blogs',{
                method:"POST",
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                setIsPending(false);
                //1-redirect by using steps
                // history.go(-1);

                //2-redirect by url
                history.push("/");
            })
        
    }
    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label>Title:</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="body">
                    <label>Body:</label>
                    <textarea
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <div className="author">
                    <label>Author:</label>
                    <select
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="Laith">Laith</option>
                        <option value="Asad">Asad</option>
                    </select>
                </div>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;