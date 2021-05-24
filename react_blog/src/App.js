// import './App.css';
import React, { useState } from "react";


const App = () => {
  const [posts,setPosts] = useState([{userId:4,id:103,title:"hiii",body:"ahmad"},{userId:5,id:104,title:"We strive to teach you programming",body:"We want you to be a hacker"},]);

  const [userId,setUserId]=useState(), [id,setId]=useState(), [title,setTitle]=useState(), [body,setBody]=useState()
  
  return(<>
   <div><h1>Blog App</h1></div>

  {posts.map((elem,i)=>{
return <div key={i}> <h4>{elem.title}</h4> <p>{elem.body}</p>

<button>click here</button>
<input type ="text" placeholder="Khabis as you wish" onChange={(a)=>{setUserId(a.target.value)}}/>
<input type ="text" placeholder="Khabis as you wish" onChange={(a)=>{ setId(a.target.value)}}/>
<input type ="text" placeholder="Khabis as you wish" onChange={(a)=>{setTitle(a.target.value)}}/>
<input type ="text" placeholder="Khabis as you wish" onChange={(a)=>{setBody(a.target.value)}}/>
</div>
})}
</>)}
export default App;
