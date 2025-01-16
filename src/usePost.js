// import { useEffect, useState } from "react";

// const usePost =(url,blog)=>{
//     // const [isPending,setIsPending] = useState(false);

//     useEffect(()=>{
//         fetch(url,{
//             method:"POST",
//             headers:{"Content-Type":"Application/json"},
//             body:JSON.stringify(blog)
//         }).then(()=>{
//             console.log("New Blog Added");
//             setIsPending(false);
//         })
    
//         return isPending;
    
//     })
// }

// export default usePost;