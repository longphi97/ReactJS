const sortByList = (data = [], options = {}) => {
    const newsort = [...data];
    return newsort.sort ((a,b) => {
      if (options.by === "name") {
      if (a.name.toUpperCase() > b.name.toUpperCase()) return options.value;
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -options.value;
      return 0;
      }
      else {
        if (a.status < b.status) return options.value;
        if (a.status > b.status) return -options.value;
        return 0;
        }
    })
}