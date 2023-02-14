import React, { useState } from "react"
import "./style.css"
import BlogData from "../../api/BlogData"
import BlogCard from "./BlogCard"

const AllBlog = () => {
  const [items, setIems] = useState(BlogData)
  return (
    <>
      <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllBlog