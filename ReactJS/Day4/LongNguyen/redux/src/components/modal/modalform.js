import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { Add, Close } from "@mui/icons-material";
  import Button from '@mui/material/Button';
  import Stack from '@mui/material/Stack';
  import { v4 as uuidv4 } from 'uuid';
import './modal.scss';
import { useDispatch, useSelector } from "react-redux";
import { useState} from 'react'
import { changeTodo } from "../../redux/actions";

function ModalForm({handleClose, data}) {
    console.log(data)
    const [name, setName] = useState(data.name)
    const [status, setStatus] = useState(data.status)

    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todoList)

    const handleInputChange = (e) => {
        setName(e.target.value)
    }
    const handleAddStatus = (e) => {
        setStatus(!status)
    }

    const handleChangeValue = () => {
      const newtodolist = todoList.map((item) => {
        if (item.id === data.id) {
          return {...item, name : name, status: status}
        }
        return item;
      })
      dispatch(changeTodo(newtodolist))
      handleClose()
    }
    
      return (
        <div className="todo-modal card">
          <div className="todo-header">
            <p className="todo-title">Cập nhật Công việc</p>
            <p className="todo-close">
              <Close onClick={handleClose}/>
            </p>
          </div>
          <div className="todo-body">
            <div className="name">
              <p>Tên : </p>
              <div style={{ width: "100%", margin: "10px" }}>
                <TextField
                  size="small"
                  style={{ width: "90%" }}
                  id="outlined-basic"
                  variant="outlined"
                  label="Tên"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="status">
              <p>Trạng Thái : </p>
              <div style={{ width: "100%", margin: "10px" }}>
                <FormControl fullWidth>
                  <InputLabel
                    style={{ width: "90%"}}
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
                    value={status}
                    onChange={handleAddStatus}
                  >
                    <MenuItem value={true}>Kích Hoạt</MenuItem>
                    <MenuItem value={false}>Ẩn</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="todo-footer">
            <div>
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success" onClick={handleChangeValue}>
                    Sửa
                </Button>
                <Button variant="outlined" color="error" onClick={handleClose}>
                    Hủy bỏ
                </Button>
            </Stack>
            </div>
          </div>
        </div>
  )
}

export default ModalForm