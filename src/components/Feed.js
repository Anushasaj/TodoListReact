import "./Header.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState();
  const [setTodos,todo]=useState();
  // Feed = ({todo,setTodos,setEditTodo}) => {
  //   const[setTodos]=0;
  
  // return 
  // <div>
  //      {post.map(p => <Feed
  //         //  text={todo.value}
  //         //  todo={todo}
  //          setTodos={setTodos}
  //         //  todos={todos}
  //      />)}
  //   </div>;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        `http://localhost:9092/api/taskNote/${query}`
      );
      setPost(response.data);
    };
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:9092/api/task`);
      console.log(response);
      setPost(response.data);
    };
    if (query.length === 0) fetchInitialPosts();
    if (query.length > 2) fetchPosts();
  }, [query]);
  console.log(post);
  const handleDelete = async(id)=>{
    console.log(id)
    await axios.delete(`http://localhost:9092/api/task/${id}`)
    console.log("delee")
    // loadUsers()

}
// Feed = ({text, todo, todos, setTodos}) => {
  const handleComplete = (p) => {
    console.log("rtyui");
    setTodos(
      post.map((item) => {
        // console.log(item);
        if (item.id === p.id) {
          console.log(item.id);
           console.log(p.id);
           console.log(!item.completed);
          return { ...item, completed: !item.completed };
        }
        // console.log(item);
        return item;
        console.log("dfghjk");
      })
    );
  }
  
  return (
  
    <table className="table">
      <thead>
        <tr>
          {/* <th>Id</th> */}
          {/* <th>Tasks</th>
          <th>Mark as done </th>
          <th> Delete</th> */}
          {/* <th> className</th>
     <th> divisionName</th>
     <th> gender</th> */}
        </tr>
      </thead>

      
      <tbody>
        {post &&
          post.map((p) => (
            <li className="list-item" key={p.id}>
             <input
                type="text"
                value={p.taskNote}
                className='list ${p.completed ? "complete" :""}'
                onChange={(event) => event.preventDefault()}
              />
             <div>
                <button
                  className="button-complete task-button"
                  onClick={() => {handleComplete(p)}}
 
                >
                  <i className="fa fa-check-circle"></i>
                </button> </div>
               <div> <button className="button-delete task-button" onClick={() => handleDelete(p.id)}>
            <i className="fa fa-trash"></i>
        </button>
              </div>
            </li>
          ))}
      </tbody>
    </table>
  );
};
export default Feed;
