import {useHistory} from 'react-router-dom';

const useDeleteBlog = ()=>{
    const history = useHistory();

    const deleteBlog = (url)=>{
        fetch(url,{
            method:"DELETE"
        }).then(()=>{
            history.push("/");
        });
    }
   return {deleteBlog};
}

export default useDeleteBlog;