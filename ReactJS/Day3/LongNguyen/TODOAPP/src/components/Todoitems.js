function TodoItems({data, id, onDelete, onFixing}) {

    console.log(data)
    const onDeletebtn = () => {
        onDelete(id)
    }

    const onFixingbtn = () => {
        onFixing(id,data)
    }

  return (
    <tr>
        <td>
            {id+1}
        </td>
        <td>
            {data.name}
        </td>
        <td className="text-center">
        {data.status ? (<span className='label label-primary'>Kích hoạt</span>) : (<span className='label label-danger'>Ẩn</span>)}
            
        </td>
        <td className='text-center'>
            <button type="button" className="btn btn-warning mr-5 mr-0"
                onClick={onFixingbtn}
            >
                <span className='fa fa-pencil mr-5'></span>
                Sửa
            </button>
            <button type="button" className="btn btn-danger ml-5 mr-0"
                onClick={onDeletebtn}
            >
                <span className='fa fa-trash mr-5'></span>Xóa
            </button>
            
        </td>
    </tr>
  )
}

export default TodoItems