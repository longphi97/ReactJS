import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
  } from "@mui/material";
  import { Close } from "@mui/icons-material";
  import Button from '@mui/material/Button';
  import Stack from '@mui/material/Stack';
  import { v4 as uuidv4 } from 'uuid';
import './tabform.scss';
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../redux/actions'
import { useState} from 'react'

function TabForm({toggleButton}) {
    const [name, setName] = useState('');
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch();
    const style = {
        marginRight: "6px",
      };
    
    const handleInputChange = (e) => {
      setName(e.target.value)
    }

    const handleAddStatus = (e) => {
      setStatus(!status)
    }

    const handleAddButtonClick = () => {
      dispatch(addTodo({
        id: uuidv4(),
        name: name,
        status: status
      }))
      setName("")
      setStatus(true);
    }
    
      return (
        <div className="todo-modal card">
          <div className="todo-header">
            <p className="todo-title">Thêm Công việc</p>
            <p className="todo-close">
              <Close onClick={toggleButton}/>
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
                <Button variant="contained" color="success" onClick={handleAddButtonClick}>
                    Thêm
                </Button>
                <Button variant="outlined" color="error" onClick={toggleButton}>
                    Hủy bỏ
                </Button>
            </Stack>
            </div>
          </div>
        </div>
  )
}

export default TabForm