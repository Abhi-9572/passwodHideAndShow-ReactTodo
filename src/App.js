import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PasswordHideAndShow from './PasswordHideAndShow';

function App() {

  // const[todo,setTodo]=useState([{text:"abhi",done:false,isEdit:false}])

  // const handleSubmit=(event)=>
  // {
  //   event.preventDefault();
  //   // console.log(event.target.elements.todo.value);
  //   const newTodo=event.target.elements.todo.value;
  //   setTodo([...todo,{text:newTodo,done:false}])
  //   event.target.elements.todo.value=""
    
  // }

  // const handleDelete=(index)=>
  // {
  //   const updatedTodo=[...todo]
  //   console.log(index);
  //   updatedTodo.splice(index,1)
  //   setTodo(updatedTodo)
  // }

  // const handleDone=(index)=>
  // {
  //   const updatedTodo=[...todo]
  //   updatedTodo[index].done=!updatedTodo[index].done;
  //   console.log(updatedTodo);
  //   setTodo(updatedTodo)
  // }

  // const handleEdit=(val)=>
  // {
  //   // console.log(val);
  //   const updatedTodo=[...todo];
  //   val.isEdit=!val.isEdit;
  //   setTodo(updatedTodo)

   

  // }

  // const handleInputChange=(i,e)=>
  // {
  //   const updatedTodo=[...todo]
  //   updatedTodo[i].text=e.target.value;
  //   setTodo(updatedTodo)
  // }
 
  // return (
  //   <div style={{padding:'0% 25%'}}>
  //     <h1 className='display-1 text-center'>To Do List</h1>
  //     <form className='d-flex' onSubmit={handleSubmit}>
  //       <input type='text' name='todo' className='form-control'/>
  //       <button type='submit' className='btn btn-primary'>Add ToDo</button>
  //     </form>
  //     <div>
  //     <h2 className='display-6'>Current Todo</h2>
  //     <ul className='list-group'>
  //       {
  //         todo.map((val,i)=>
  //         {
  //           return (
  //             <li key={i} className='list-group-item'>
  //               {
  //                 val.isEdit? <input style={{borderRadius:"5px"}} value={val.text} onChange={(e)=>handleInputChange(i,e)}/>:<div style={{float:'left' ,textDecoration:val.done? 'line-through':"none"}}>
  //                 {val.text}
  //               </div>
  //               }
                
  //               <button onClick={()=>handleDone(i)} className='btn btn-success mx-2' style={{float:'right' }}>Done</button>
  //               <button onClick={()=>handleDelete(i)} className='btn btn-danger mx-2' style={{float:'right'}}>Delete</button>
  //               <button onClick={()=>handleEdit(val)} className='btn btn-secondary' style={{float:'right'}}>{!val.isEdit?"Edit":"Ok"}</button>
  //             </li>
  //           )
  //         })
  //       }
  //     </ul>
  //   </div>
  //   </div>
  //   );
    return(
      <div className='App'>
      <PasswordHideAndShow/>
      </div>
      
    )

   
}

export default App;
