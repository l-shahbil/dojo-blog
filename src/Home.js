import BlogList from "./BlogList";
import useFetch from './useFetch';
import  API_BASE_URL  from "./config";

const Home = () => {
    const { data:blogs, isPending, error } = useFetch(API_BASE_URL);

    return (
        <div className="home">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title="Hello All Blogs" />}
        </div>
    );
}

export default Home;