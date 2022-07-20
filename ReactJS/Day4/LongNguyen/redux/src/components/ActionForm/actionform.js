import React from "react";
import { Add, AcUnit } from "@mui/icons-material";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import Stack from '@mui/material/Stack';
import { generalTodo, sortTodo } from "../../redux/actions";
import { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const GenerData = [
    {
      name: 'Learn DataBase',
      status: true
    },
    {
        name: 'Learn React',
        status: false
    },
    {
        name: 'HTML, CSS',
        status: true
    },
    {
      name: 'Learn NodeJS',
      status: true
    },
    {
        name: 'Learn PHP',
        status: false
    },
    {
        name: 'Swimming',
        status: true
    },
    {
      name: 'Thief',
      status: true
  }
  ]



function ActionForm( {toggleButton} ) {

  const [sort, setSort] = useState('default')
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList)
  console.log(sortTodo)

  const generalButton = () => {
    const a = Math.floor((Math.random() * GenerData.length));
    const newGeneralList = [...todoList,{...GenerData[a],id: uuidv4()}]
    dispatch(generalTodo(newGeneralList))
  }


  const handleAddStatus = (e) => {
    setSort(e.target.value)
    dispatch(sortTodo(e.target.value))
  }

    return (
      <div className="action-form card" style={{margin: '5px'}}>
        <div className="header">
        <Stack direction="row" spacing={2}>
            <Button  variant="contained" onClick={toggleButton} ><Add />Thêm Công Việc</Button>
            <Button  variant="contained" style={{backgroundColor:"green"}} onClick={generalButton} ><AcUnit />Generate Data</Button>
           <FormControl style={{ backgroundColor: "grey", width: "20%"}}>
                  <InputLabel
                    id="demo-simple-select-label"
                  >
                    Sắp Xếp
                  </InputLabel>
                  <Select
                    size="small"
                    style={{}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Trạng Thái"
                    value={sort}
                    onChange={handleAddStatus}
                  >
                    <MenuItem value="default">Default</MenuItem>
                    <MenuItem value="A-Z">A-Z</MenuItem>
                    <MenuItem value="Z-A">Z-A</MenuItem>
                  </Select>
                </FormControl>
        </Stack>
        </div>
      </div>
    );
  };
  
  export default ActionForm;