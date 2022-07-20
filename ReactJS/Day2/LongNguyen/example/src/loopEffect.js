import React from 'react'
import { useEffect, useState } from 'react'
function loopEffect() {

    const [ posts, setPosts ] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    })
  return (
    <div>
        <ul>
            {posts.map(post => (
                <li key={posts.id}>{posts.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default loopEffect