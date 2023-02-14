import React from 'react'
import Card from "./Card"
import TestimonialData from "../../api/TestimonialData"
import "./style.css"
const AllTestimonial = () => {
  return (
    <>
      <section className='Testimonial mtop'>
        <div className='container grid1'>
          {TestimonialData.map((value, index) => {
            return <Card key={index} {...value} />
          })}
        </div>
      </section>
    </>
  )
}

export default AllTestimonial