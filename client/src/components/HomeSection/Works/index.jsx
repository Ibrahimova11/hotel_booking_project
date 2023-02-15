import React from "react"
import "../../Popular/style.css"
import "./style.css"
import Card from "./Card"
import WorkData from "../../../api/WorkData"

const Index = () => {
  return (
    <>
      <section className='popular works'>
        <div className='container'>
          <div className='heading'>
            <h1>How it Works </h1>
            <div className='line'></div>
          </div>

          <div className='content grid'>
            {WorkData.map((value, index) => {
              return <Card key={index} cover={value.cover} title={value.title} desc={value.desc} />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index