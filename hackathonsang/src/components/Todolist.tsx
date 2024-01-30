import { FiEdit2 } from "react-icons/fi"; 
import { GiConfirmed } from "react-icons/gi"; 
import { AiFillDelete } from "react-icons/ai"; 
import { RxSwitch } from "react-icons/rx"; 
import React, { ChangeEvent, useEffect, useState } from 'react'
import "../components/Todolist.scss"
import axios from "axios";
interface todolist{
  id: number,
  username: string,
  status:boolean
}
export default function Todolist() {
  const [name, setName] = useState("")
  const [flag,setFlag]=useState(false)
  const [tasck, setTasck] = useState<todolist[]>([])

  const data = async () => {
    const response = await axios.get("http://localhost:8000/api/v1/todolist")
    setTasck(response.data.todolist)
  }
  
  const handleOnclick = async () => {
    if (name=="") {
      alert("khong duoc de trong")
    } else {
       await axios.post("http://localhost:8000/api/v1/todolistadd", {
      id: Math.floor(Math.random() * 99999),
      name: name,
      status:false
   })
  setFlag(!flag)
   setName("")
    }
   
  }
  const handleDelete = async (id: number) => {
    if (confirm("ban co mon xoa khong")) {
       await axios.delete(`http://localhost:8000/api/v1/todolistdelete/${id}`)
  setFlag(!flag)
    }
    
  }
  const handleStatus = async (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const status=e.target.checked
    const response = await axios.put(`http://localhost:8000/api/v1/todolistupdate/${id}`, { status })
  setFlag(!flag)
  }
  useEffect(() => {
    data()
  },[flag])
  return (
      <>
          <div className="container">
                <div className="header">
              <h2>Setup Quiz</h2>
           
              </div>
              <hr />
        <div className="main">
            <div className="main-conten">
            
<p>number of questiont</p>
<input type="number" />
<p>Category</p>
            <select name="" id="">
              <option value="sport">sport</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
</select>
<p>Diffculty</p>
            <select name="" id="">
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
                
            </select> 
            </div>
          </div>
          <div className="food">
               <button> Start</button>
          </div>
          </div>
        
    </>
  )
}
