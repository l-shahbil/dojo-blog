const BlogList = ({ blogs, title, handleDelte }) => {

    //This is a way to deal with the props
    // const blogs = props.blogs
    // const title = props.title

    return (
        <div className="blog-list">
            <h1> {title} </h1>
            {blogs.map((blog) =>
            (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => { handleDelte(blog.id) }}>Delete</button>
                </div>

            ))}
        </div>
    );
}

export default BlogList;