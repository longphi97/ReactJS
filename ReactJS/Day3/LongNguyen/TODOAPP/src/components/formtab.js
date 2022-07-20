import { useState, useEffect } from 'react'
import "../App.css"

function FormTab(props) {
  var _ = require('lodash');
    const Obj = {
      id: "",
      name : "",
      status: false
    };
    useEffect(() => {
      if (props.task) {
        setValue({...props.task.data,id : props.task.id})
        setName(props.task.data.name)
        setStatus(props.task.data.status)
      }
     
    },[props.task])
    
    const [ name , setName ] = useState('');
    const [ status, setStatus ] = useState(false);
    const [value, setValue ] = useState(Obj)

    const oncloseForm = () => {
        props.onClose();
    }
    const onChangeName = (e) => {
      setName(e.target.value);
      setValue({...value, name : e.target.value })


      //setValue(prev => ({...prev, name : e.target.value}))
    }

    const onChangeStatus = (e) => {
      setStatus(!status)
      setValue({...value, status : !status })

    }
    const onSubmitbutton = (e) => {
        e.preventDefault();
        props.onSubmit(value)
        setName('')
        
    }

    const onUpdate = (e) => {
      e.preventDefault();
      props.onEditApp(value)
      setName('')
      props.setTaskEdit('')
      // typeof props.onUpdated === 'function' && props.onUpdated({name, status})
    }

  
  return (

    <div className='panel panel-warning form-tab fb-t5'
    style={{
      background: "linear-gradient(325.43deg, #00E4E5 0%, #C780FF 99.33%)",
      fontSize: '15px'
    }}
    >
            <div className='panel-heading'>
              <h3 className='panel-title'>
                {_.isEmpty(props.task) ? "Thêm công việc" : "Cập Nhật Công Việc"}
                <span className='fa fa-times-circle text-right mr-5'
                    onClick={oncloseForm}
                >
                </span>
              </h3>
            </div>
            <div className='panel-body'>
              <form>
                <div className='form-group'>
                  <label>Tên</label>
                  <input
                    type='text' 
                    className='form-control' 
                    name='name'
                    value={name}
                    onChange={onChangeName}
                  />
                  <label>Trạng thái</label>
                  <select className='form-control'
                    name='status'
                    value={status}
                    onChange={onChangeStatus}
                  >
                    <option value={true}>Kích Hoạt</option>
                    <option value={false}>Ẩn</option>
                  </select><br />
                  <div className='text-center'>
                    <button
                      type='submit'
                      className='btn btn-warning mr-5'
                      onClick={_.isEmpty(props.task) ? onSubmitbutton : onUpdate }
                    >{ _.isEmpty(props.task) ? "Lưu lại" : "Chỉnh sửa"} </button>
                    <button
                      type='submit'
                      className='btn btn-danger ml-5'
                      onClick={oncloseForm}
                    >
                    Hủy bỏ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
  );
}

export default FormTab;
