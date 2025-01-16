import BlogList from "./BlogList";
import useFetch from './useFetch';

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="Hello All Blogs" />}
        </div>
    );
}

export default Home;