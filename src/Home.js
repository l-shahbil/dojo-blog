import { useEffect, useState } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 }
        , { title: "Welecome party!", body: "lorem ipsum...", author: "laith", id: 2 }
        , { title: "Web dev top tips", body: "lorem ipsum...", author: "laith", id: 3 }
    ]);

    const [name,setName] = useState("Mario");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => (blog.id !== id));
        setBlogs(newBlogs);
    };

    useEffect(() => {
        console.log("Use Effect");
        console.log(name);
    },[name]);


    return (
        <div className="home">
            <BlogList blogs={blogs} title="Hello All Blogs" handleDelte={handleDelete} />
            {/* <BlogList blogs ={blogs.filter((blog)=>(blog.author ==="laith"))} title = "Laith's Blogs" handleDelte={handleDelete}/> */}
            <button onClick={()=>{setName("Laith")}}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;