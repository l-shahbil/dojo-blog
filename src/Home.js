const Home = () => {
    const handleClick =()=>{
        console.log("Hello Laith :)")
    }
    const handleClickAgain = (name,e)=>{
        console.log(`Hello ${name}` ,e.target)
    }
    return ( 
        <div className="home">
            <h2>Home page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain("Ninja",e)}>Click Me Again</button>
        </div>
     );
}
 
export default Home;