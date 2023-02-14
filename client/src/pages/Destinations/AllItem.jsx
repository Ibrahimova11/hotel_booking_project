import React, { useState } from "react"
import Dcards from "./Dcards"
import "./style.css"
import DestinationData from "../../api/DestinationData"

const AllItem = () => {
  const [items, setIems] = useState(DestinationData)
  return (
    <>
      <section className='gallery desi mtop'>
        <div className='container'>
          <div className='content grid'>
            {items.map((item) => {
              return <Dcards key={item.id} item={item} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllItem