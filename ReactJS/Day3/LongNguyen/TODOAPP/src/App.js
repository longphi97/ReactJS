import './App.css';
import { useState } from 'react';
import FormTab from './components/formtab';
import TodoList from './components/todolist';
import TaskControl from './components/taskcontrol';


function App() {

  const randomm = [
    {
      name: "Đi Ngủ",
      status: true
    },
    {
      name : "Học bài",
      status: false
    },
    {
      name : "Đánh đàn",
      status: false
    },
    {
      name : "Đá Bóng",
      status: true
    },
    {
      name : "Chạy bộ",
      status: true
    },
    {
      name : "Tập Gym",
      status: true
    },
    {
      name : "Bóng chuyền",
      status: true
    },
    {
      name : "Cầu lông",
      status: false
    }
  ]



  const [isdisplayform, setIsdisplayform] = useState(false)
  const [dataApp,setDataApp] = useState([])
  const [taskedit, setTaskEdit] = useState(null)
  const onToggleForm = () => {
    setIsdisplayform(!isdisplayform)
  }

  const onCloseForm = () => {
    setIsdisplayform(false)
  }

  const onShowForm = () => {
    setIsdisplayform(true)
  }

  const onSubmitApp = (data) => {
    setDataApp([...dataApp,data])
  }
  const onEditApp = (data) => {
    dataApp.splice(data.id, 1, data)
    const newdataApp = [...dataApp]
    setDataApp(newdataApp)
  }

  const onDelete = (id) => {
    const index = id;
      dataApp.splice(index, 1);
      const newArr = [...dataApp];
      setDataApp(newArr)
    }

  const onFixing = (id,data) => {
    console.log(id,data)
    setTaskEdit({
      id: id,
      data : data,
    })
    onShowForm();
  }
  
  const generalData = () => {
    const a = Math.floor((Math.random() * randomm.length));
    setDataApp([...dataApp,randomm[a]])
  } 
  const onSort = (sortss) => {
    const newsort = [...dataApp]
    newsort.sort ((a,b) => {
      if (sortss.by === "name") {
      if (a.name.toUpperCase() > b.name.toUpperCase()) return sortss.value;
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -sortss.value;
      return 0;
      }
      else {
        if (a.status < b.status) return sortss.value;
        if (a.status > b.status) return -sortss.value;
        return 0;
        }
    })
  
    setDataApp(newsort)
  }
  const elmentform = isdisplayform ? < FormTab 
            onSubmit={onSubmitApp}  
            onClose={onCloseForm}
            task={taskedit}
            onEditApp={onEditApp}
            setTaskEdit={setTaskEdit} 
        
          /> : "";
  
  return (
    <div className="container"
    style={{
      background: "linear-gradient(153.43deg, #00E4E4 0%, #C780FF 83.33%)",
      padding: "5rem",
      width: "100%",
      height: "100%",
      margin: "0"
    }}

    >
      <div className='text-center'>
        <h1 className='title'>Quản lý công việc</h1><hr/>
      </div>
      <div className='row'>
        <div className={isdisplayform
          ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4 md-7' 
          : ''}
        >
          {elmentform}
        </div>
        <div className={isdisplayform ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8 rp-12'
          : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 '}  
        >
          <button type="button" className="btn btn-primary mr-5"
            onClick={onToggleForm}
          >
            <span className='fa fa-plus mr-5'></span>Thêm công việc
          </button>
          <button type="button" className="btn btn-danger ml-5"
            onClick={generalData}
          >
            <span className='fa fa-plus mr-5'></span>Generate
          </button>
          <TaskControl 
            onSort={onSort}
          />
          <div className='row mt-5'>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
              <TodoList 
                dataApp={dataApp}
                setDataApp={setDataApp}
                onDelete={onDelete}
                onFixing={onFixing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
