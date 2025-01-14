import Navbar from './Navbar';
import Home from './Home';

function App() {
  //This Code For Dynamic Values
  // const title ="Welecome to the new blog";
  // const liked = 50;
  // const link ="www.google.com";

  return (
    <div className="App">
      <Navbar />
     <div className="content">
      <Home/>


      {/* ################################# */}
      {/* this code for Dynamic Values in Template*/}
      
        {/* <h1>{title}</h1>
        <p>like {liked} items</p>
        <p>10</p>
        <p>Hello,Nenja</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>google site</a> */}
     </div>
    </div>
  );
}

export default App;
