
function Search() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
        <input 
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Nhập từ khóa..."
        />
        <span className="input-group-btn"> 
            <button type="button" class="btn btn-primary">
            <span className='fa fa-search mr-5'></span>Tìm kiếm
            </button> 
        </span>
        </div>  
    </div>
  );
}

export default Search;
