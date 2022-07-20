import React from "react";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { useState } from 'react'
import ModalForm from "../modal/modalform";
import {sortBy} from "lodash"

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import "./table.scss";
import { deleteTodo } from "../../redux/actions";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function TableData() {
  const [open, setOpen] = useState(false);
  const [dataEdit,setDataEdit] = useState({})
  const sortTodo = useSelector((state) => state.sort)

  const handleOpenEdit = (data) => {
    setDataEdit(data)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.todoList)
  const [inputText, setInputText] = useState("");
  const [status, setStatus] = useState('all')
 
  const handleDelete = (id) => {
    const newDeleteList = [...todoList].filter((item)=> item.id !== id)
    dispatch(deleteTodo(newDeleteList))
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const handleSearch = (e) => {
    const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
  }

  const filteredData = todoList.filter((el) => {
    if (inputText === '' && status === "active") {
        return el.name.toLowerCase().includes(inputText) && el.status === true;;
    } else if ( status === "hide") {
        return el.name.toLowerCase().includes(inputText) && el.status === false;  
    }
    else {
        return el.name.toLowerCase().includes(inputText);
    }
  }
  )
  const sortAZ = sortBy(filteredData, ['name'])
  const sortData = (sortTodo ==="default" && filteredData) || (sortTodo ==="A-Z" && sortAZ) || (sortTodo ==="Z-A" && sortAZ.reverse())
  // filteredData.reverse()

  return (
    <div
      className="table card"
      style={{
        borderRadius: "6px",
      }}
    >
      <TableContainer component={Paper}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <ModalForm handleClose={handleClose} data ={dataEdit}/>
        </Box>
      </Modal>
     
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: 100 }}>STT</TableCell>
              <TableCell style={{textAlign: "center"}}>Tên</TableCell>
              <TableCell style={{textAlign: "center"}}>Trạng Thái</TableCell>
              <TableCell style={{textAlign: "center"}}>Hành Động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                style={{ width: 100 }}
                component="th"
                scope="row"
              ></TableCell>
              <TableCell style={{ width: 300 }} align="left">
                <div style={{ width: "100%" }}>
                  <TextField
                    size="small"
                    style={{ width: "90%" }}
                    id="outlined-basic"
                    label="Tên"
                    variant="outlined"
                    onChange={handleSearch}
                  />
                </div>
              </TableCell>
              <TableCell align="left">
                <div style={{ width: "100%" }}>
                  <FormControl fullWidth>
                    <InputLabel
                      style={{ width: "90%" }}
                      id="demo-simple-select-label"
                    >
                      Trạng Thái
                    </InputLabel>
                    <Select
                      size="small"
                      style={{ width: "90%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Trạng Thái"
                      onChange={handleStatus}
                    >
                      <MenuItem value="all">Tất Cả</MenuItem>
                      <MenuItem value="active">Kích Hoạt</MenuItem>
                      <MenuItem value="hide">Ẩn</MenuItem>
                    </Select>
                  </FormControl >
                </div>
              </TableCell>
              <TableCell align="left"></TableCell>
             
            </TableRow>
            {sortData.map((row, i) => {
              return (
                <TableRow
                  key={i}
                  id={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell style={{ width: 100 }} component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell style={{ width: 100 }} component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell style={{ width: 300 , textAlign: "center"}} align="left">
                    {row.name}
                  </TableCell>
                  <TableCell style={{ minWidth: 160 }} align="left">
                  { row.status ? <Chip style={{ minWidth: "120px" }} label="Kích Hoạt" color="success" />
                    : <Chip style={{ minWidth: "120px" }} label="Ẩn" color="error" />}
                  </TableCell>
                  <TableCell align="left">
                    <div className="table-action">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" onClick={() => handleOpenEdit(row)} ><Edit />Sửa</Button>
                        
                        <Button variant="contained" style={{backgroundColor: "red"}} onClick={()=>handleDelete(row.id)}><DeleteOutline />Xóa</Button>
                    </Stack>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
