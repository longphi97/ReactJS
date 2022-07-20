import React from 'react'
import Search from './searchsort'
import Sort from './sort'

function TaskControl({onSort}) {
  return (
    <div className="row mt-15">
        <Sort
            onSort={onSort}
        />
    </div>
  )
}

export default TaskControl