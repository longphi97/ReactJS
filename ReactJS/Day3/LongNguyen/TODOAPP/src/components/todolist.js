import React from 'react'
import "../App.css"
import { useState } from 'react'
import TodoItems from './Todoitems'

function TodoList({dataApp, onDelete, onFixing}) { 

    const [inputText, setInputText] = useState("");
    const [status, setStatus] = useState("all")
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const handleStatus = (e) => {
        setStatus(e.target.value)

    }


    const filteredData = dataApp.filter((el) => {
        if (inputText === '' && status === "ok") {
            return el.name.toLowerCase().includes(inputText) && el.status === true;;
        } else if ( status === "notok") {
            return el.name.toLowerCase().includes(inputText) && el.status === false;  
        }
        else {
            return el.name.toLowerCase().includes(inputText);
        }
      }
      )

  return (
    <table className="table table-bordered table-hover mt-15"
    style={{
        fontSize: '15px'
      }}
    >
        <thead>
            <tr>
            <th className='text-center'>STT</th>
            <th className='text-center'>Tên</th>
            <th className='text-center'>Trạng Thái</th>
            <th className='text-center'>Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <input 
                        type="search"
                        value={inputText}
                        className='form-control'
                        onChange={inputHandler}
                    />
                </td>
                <td>
                    <select 
                    className='form-control'  
                    onChange={handleStatus}  
                    >
                    <option value="all">Tất cả</option>
                    <option value="ok">Kích hoạt</option>
                    <option value="notok">Ẩn</option>
                    </select>
                </td>
                <td></td>
            </tr>
            {filteredData.map((item,index)=>(
            <TodoItems 
                key={index} 
                id={index} 
                data={item}
                onDelete={onDelete}
                input={inputText}
                onFixing={onFixing}
            />
            ))}
            
        </tbody>
    </table>
  )
}

export default TodoList